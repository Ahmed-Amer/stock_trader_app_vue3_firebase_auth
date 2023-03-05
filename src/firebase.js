// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChoZT8U_PTHmC6xLfa3AVeScuLdQRp8mk",
  authDomain: "vue-stock-trader-76f45.firebaseapp.com",
  databaseURL: "https://vue-stock-trader-76f45-default-rtdb.firebaseio.com",
  projectId: "vue-stock-trader-76f45",
  storageBucket: "vue-stock-trader-76f45.appspot.com",
  messagingSenderId: "392733794516",
  appId: "1:392733794516:web:7ba3e3dad93cd94b371b41",
  measurementId: "G-9L46T8TJQ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export{
    app
}