
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgaOD4nfkY8ViDO-TYpwKAQZdEKlJxrak",
  authDomain: "votingcouncil-d8bc6.firebaseapp.com",
  projectId: "votingcouncil-d8bc6",
  storageBucket: "votingcouncil-d8bc6.appspot.com",
  messagingSenderId: "372176940713",
  appId: "1:372176940713:web:75aafcdc7054e1f15e43b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;
