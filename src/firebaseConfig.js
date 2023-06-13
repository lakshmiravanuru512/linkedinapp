// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZANtG0BFocVVE6GCEWPOf5xtNb5MLOZY",
  authDomain: "linkedin-clone-b871f.firebaseapp.com",
  projectId: "linkedin-clone-b871f",
  storageBucket: "linkedin-clone-b871f.appspot.com",
  messagingSenderId: "782144695860",
  appId: "1:782144695860:web:0fb34c70ee634a2d0c6461",
  measurementId: "G-Y57MRYJ1V4"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth=getAuth(app);
export {app,auth};