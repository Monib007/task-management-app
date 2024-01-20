
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZeGALz5GYvL1xiUfTSQjQ-gsvw9Mzdx0",
  authDomain: "task-management-607e8.firebaseapp.com",
  projectId: "task-management-607e8",
  storageBucket: "task-management-607e8.appspot.com",
  messagingSenderId: "851639150611",
  appId: "1:851639150611:web:f27b53a02878822da1f7e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getDatabase(app);