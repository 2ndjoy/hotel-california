// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC5RmzUTmJlj7swgR3vL18Wl0pSnVvT5CQ",
    authDomain: "hotel-california-auth.firebaseapp.com",
    projectId: "hotel-california-auth",
    storageBucket: "hotel-california-auth.appspot.com",
    messagingSenderId: "700517047858",
    appId: "1:700517047858:web:fd1674698825e51f70662b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;