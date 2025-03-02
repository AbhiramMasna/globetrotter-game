import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// ✅ Ensure these match your Firebase console settings
const firebaseConfig = {
    apiKey: "AIzaSyCRA_HZkLPlEmBK0TWV2PoyQls1XexXZxw",
    authDomain: "globetrotter-game.firebaseapp.com",
    projectId: "globetrotter-game",
    storageBucket: "globetrotter-game.appspot.com",
    messagingSenderId: "652253580243",
    appId: "1:652253580243:web:e1af76433d2661c7b07d26"
};

// ✅ Initialize Firebase App
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }; // ✅ Make sure we export `db` instead of firebaseConfig
