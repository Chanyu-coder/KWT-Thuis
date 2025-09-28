// Firebase config for KWT Thuis
const firebaseConfig = {
  apiKey: "AIzaSyARmTMXOVabCpo9Ya73rM9gLLFe6Z_AgpE",
  authDomain: "kwt-thuis.firebaseapp.com",
  projectId: "kwt-thuis",
  storageBucket: "kwt-thuis.appspot.com",
  messagingSenderId: "1056553352871",
  appId: "1:1056553352871:web:REPLACE_THIS_WITH_APPID" // Replace with your actual appId
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const signupForm = document.getElementById('signup-form');
const message = document.getElementById('message');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  // Create user with Firebase Auth
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Save username in localStorage
      localStorage.setItem('username', username);

      message.style.color = 'green';
      message.textContent = 'Account aangemaakt! Je kunt nu inloggen.';
      signupForm.reset();

      // Optional: redirect to login page after short delay
      setTimeout(() => {
        window.location.href = 'login.html';
      }, 1500);
    })
    .catch((error) => {
      message.style.color = 'red';
      message.textContent = 'Fout bij aanmaken account: ' + error.message;
    });
});

