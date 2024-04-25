// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAQhdKGxIERzlTPnv0Q3BfTAbZd54BkoFM",
    authDomain: "classroomcoins.firebaseapp.com",
    projectId: "classroomcoins",
    storageBucket: "classroomcoins.appspot.com",
    messagingSenderId: "122085735941",
    appId: "1:122085735941:web:d96b3ac4ec035fd2d1e66c",
    measurementId: "G-EY2E8S52X0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
