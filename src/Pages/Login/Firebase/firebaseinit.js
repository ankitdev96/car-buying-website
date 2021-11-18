import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseconfig";

const initializeFirebase = () => {
    initializeApp(firebaseConfig);
}

export default initializeFirebase;