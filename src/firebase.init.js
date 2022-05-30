// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhLQKVW9mreqD-1SYPoY60reCHGLt1BF0",
  authDomain: "toffpark-footwear-user.firebaseapp.com",
  projectId: "toffpark-footwear-user",
  storageBucket: "toffpark-footwear-user.appspot.com",
  messagingSenderId: "250043623247",
  appId: "1:250043623247:web:be0a8180f0961ae4fa473a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;