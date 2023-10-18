// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARwGioi5LFKq0P77RLM-ZusXAPLkEcQuE",
  authDomain: "react-brandshop-project.firebaseapp.com",
  projectId: "react-brandshop-project",
  storageBucket: "react-brandshop-project.appspot.com",
  messagingSenderId: "148832150443",
  appId: "1:148832150443:web:487da73f6d05ae277868ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app