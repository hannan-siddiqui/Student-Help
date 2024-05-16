
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBr58keupc04jQ6av1g6LztKclRlT4q13Y",
  authDomain: "student-help-837e8.firebaseapp.com",
  projectId: "student-help-837e8",
  storageBucket: "student-help-837e8.appspot.com",
  messagingSenderId: "379076334324",
  appId: "1:379076334324:web:da890e811b37bab59dc4a1",
  measurementId: "G-8QLBSJLD70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
const analytics = getAnalytics(app);