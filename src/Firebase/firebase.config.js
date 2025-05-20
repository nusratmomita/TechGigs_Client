import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgv0df68GNWdkrmm4R4Oa_y5m6wzBy76s",
  authDomain: "techgigs-79204.firebaseapp.com",
  projectId: "techgigs-79204",
  storageBucket: "techgigs-79204.firebasestorage.app",
  messagingSenderId: "588675766192",
  appId: "1:588675766192:web:4a849c2c2ed99cdc756875"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);