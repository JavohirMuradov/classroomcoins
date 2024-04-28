// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAd9tUJU1bQewvFDbtZOE_UuxpXiTrf378",
    authDomain: "classroomcoinsuz-64b9a.firebaseapp.com",
    projectId: "classroomcoinsuz-64b9a",
    storageBucket: "classroomcoinsuz-64b9a.appspot.com",
    messagingSenderId: "767726624702",
    appId: "1:767726624702:web:76f500ee3119bec31723ef",
    measurementId: "G-7C3B441H8H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
