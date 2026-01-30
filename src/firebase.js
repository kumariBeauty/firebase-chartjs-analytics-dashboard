import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

    const firebaseConfig = {
    apiKey: "AIzaSyB1sOeuw4eYK6pl8MIJfoIMT8xtW1pbCSQ",
    authDomain: "react-charts-22a08.firebaseapp.com",
    projectId: "react-charts-22a08",
    storageBucket: "react-charts-22a08.firebasestorage.app",
    messagingSenderId: "1086531678555",
    appId: "1:1086531678555:web:fa716a9f6ed1ff74136a7e",
    measurementId: "G-T1S0N7ZJFC"
    };

    const app = initializeApp(firebaseConfig);
    export const db = getFirestore(app);