// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCW8EJ2CHrc7a-oD4pwsHAuZtSOC023dgk",
  authDomain: "arabworldportal.firebaseapp.com",
  projectId: "arabworldportal",
  storageBucket: "arabworldportal.firebasestorage.app",
  messagingSenderId: "625980565930",
  appId: "1:625980565930:web:f3c5eadfc21bb7021763d3",
  measurementId: "G-3G5T078L7M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);