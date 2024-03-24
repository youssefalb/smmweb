// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from 'firebase/auth';
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCXqMTrIEY586OOCf4EVQckwfFcHZZUit4",
    authDomain: "webokraft-a3f16.firebaseapp.com",
    projectId: "webokraft",
    storageBucket: "webokraft.appspot.com",
    messagingSenderId: "892432433201",
    appId: "1:892432433201:web:9b6a468f15cbe779501510"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, app, storage };