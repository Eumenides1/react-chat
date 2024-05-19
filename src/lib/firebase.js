import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "rookie-chat-1730a.firebaseapp.com",
  projectId: "rookie-chat-1730a",
  storageBucket: "rookie-chat-1730a.appspot.com",
  messagingSenderId: "473704254606",
  appId: "1:473704254606:web:dbd2ec2c55f6189b670ddf",
  measurementId: "G-YHKSB2C49G"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()