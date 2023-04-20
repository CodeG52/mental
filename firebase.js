// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABmhgEKmBVnQ4hjvY4HZLvFLPkX5Y115s",
  authDomain: "mental-3b777.firebaseapp.com",
  projectId: "mental-3b777",
  storageBucket: "mental-3b777.appspot.com",
  messagingSenderId: "693947081362",
  appId: "1:693947081362:web:072e4f88ed3e44b7543c4b"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export {auth}
 