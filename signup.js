// Firebase config for KWT Thuis
const firebaseConfig = {
  apiKey: "AIzaSyARmTMXOVabCpo9Ya73rM9gLLFe6Z_AgpE",
  authDomain: "kwt-thuis.firebaseapp.com",
  projectId: "kwt-thuis",
  storageBucket: "kwt-thuis.appspot.com",
  messagingSenderId: "1056553352871",
  appId: "1:1056553352871:web:REPLACE_THIS_WITH_APPID" // Replace with your real appId
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Signup form logic
const signupForm = document.getElementById('signup-form');
const message = document.getElementById('message');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      db.collection('users').doc(user.uid).set({
        username: username,
        email: email
      })
      .then(() => {
        message.style.color = 'green';
        message.textContent = 'Account aangemaakt! Je kunt nu inloggen.';
        signupForm.reset();
      })
      .catch((err) => {
        message.style.color = 'red';
        message.textContent = 'Fout bij opslaan van gebruikersnaam: ' + err.message;
      });
    })
    .catch((error) => {
      message.style.color = 'red';
      message.textContent = 'Fout bij aanmaken account: ' + error.message;
    });
});
