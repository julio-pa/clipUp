// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref } from 'firebase/database'
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBefUX_7yNXQpFFEXx7VL1IPToKDI4l8Rw",
  authDomain: "clipup-jp.firebaseapp.com",
  databaseURL: "https://clipup-jp-default-rtdb.firebaseio.com",
  projectId: "clipup-jp",
  storageBucket: "clipup-jp.appspot.com",
  messagingSenderId: "580612546000",
  appId: "1:580612546000:web:e3bc7c10ad4b4a431bedd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const dbref = ref(getDatabase(app))

export { dbref }