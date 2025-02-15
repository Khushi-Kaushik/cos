// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwePSiqTmBtDkfdD6wO5-WF9MhyOAmvU8",
  authDomain: "samsara-31f3a.firebaseapp.com",
  projectId: "samsara-31f3a",
  storageBucket: "samsara-31f3a.appspot.com",
  messagingSenderId: "1008231725535",
  appId: "1:1008231725535:web:9c6c7463e9341d2f76ec6a",
  measurementId: "G-51PF4QCBJJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      const analytics = getAnalytics(app);
    }
  });
}
