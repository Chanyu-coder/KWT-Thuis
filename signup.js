// Firebase config for KWT Thuis
const firebaseConfig = {
  apiKey: "AIzaSyARmTMXOVabCpo9Ya73rM9gLLFe6Z_AgpE",
  authDomain: "kwt-thuis.firebaseapp.com",
  projectId: "kwt-thuis",
  storageBucket: "kwt-thuis.appspot.com",
  messagingSenderId: "1056553352871",
  appId: "1:1056553352871:web:REPLACE_THIS_WITH_APPID" // replace this with your real appId
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Get form and message elements
const signupForm = document.getElementById('signup-form');
const message = document.getElementById('message');

// Handle form submit
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get input values
  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  // Check if all fields are filled
  if (!username || !email || !password) {
    message.style.color = 'red';
    message.textContent = 'Vul alle velden in.';
    return;
  }

  // Create user in Firebase
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Save username in localStorage
      localStorage.setItem('username', username);

      // Show success message
      message.style.color = 'green';
      message.textContent = 'Account aangemaakt! Even geduld...';

      // Redirect to dashboard
      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 1500);
    })
    .catch((error) => {
      // Show error message
      message.style.color = 'red';
      message.textContent = 'Fout bij aanmaken account: ' + error.message;
    });
});
