// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyARmTMXOVabCpo9Ya73rM9gLLFe6Z_AgpE",
  authDomain: "kwt-thuis.firebaseapp.com",
  projectId: "kwt-thuis",
  storageBucket: "kwt-thuis.appspot.com",
  messagingSenderId: "1056553352871",
  appId: "1:1056553352871:web:REPLACE_THIS_WITH_APPID" // replace with your appId
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Form elements
const signupForm = document.getElementById('signup-form');
const message = document.getElementById('message');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      message.style.color = 'green';
      message.textContent = 'Account aangemaakt! Je wordt doorgestuurd...';

      // Redirect to dashboard.html after short delay
      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 1500);
    })
    .catch((error) => {
      message.style.color = 'red';
      message.textContent = 'Fout bij aanmaken account: ' + error.message;
    });
});
