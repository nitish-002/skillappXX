// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiKb62wolxendqGdHNXgJbpD9iW1AZ_2o",
  authDomain: "login-a6bd8.firebaseapp.com",
  projectId: "login-a6bd8",
  storageBucket: "login-a6bd8.firebasestorage.app",
  messagingSenderId: "438254811414",
  appId: "1:438254811414:web:e99cc823002faf74e33837",
  measurementId: "G-H4291FRM9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const submit = document.getElementById("submit");
submit.addEventListener("click", function(event){
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    //alert("Registered Successfully");
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Creating Account");
    window.location.href = "/homePage/home.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    // ..
  });
})