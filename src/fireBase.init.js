// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdSps_E9lPe1FnNUKcqK-hSMNnYkhqzJM",
  authDomain: "gym-assignment-5c1e6.firebaseapp.com",
  projectId: "gym-assignment-5c1e6",
  storageBucket: "gym-assignment-5c1e6.appspot.com",
  messagingSenderId: "310430546122",
  appId: "1:310430546122:web:2d67fe5893867e500b1c33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;