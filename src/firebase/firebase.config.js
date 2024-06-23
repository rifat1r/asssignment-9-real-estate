// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkyVgUqQhjDj5k99oUc_t6jlg4gU3EqYc",
  authDomain: "assignment-9-75b1a.firebaseapp.com",
  projectId: "assignment-9-75b1a",
  storageBucket: "assignment-9-75b1a.appspot.com",
  messagingSenderId: "925516328837",
  appId: "1:925516328837:web:61af3009402dbeb020deec",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
