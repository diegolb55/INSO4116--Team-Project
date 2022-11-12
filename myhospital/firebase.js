import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDaEj729cdOZXCKfcPYubmIemiJRYpw9GU",
    authDomain: "myhospital-d7591.firebaseapp.com",
    projectId: "myhospital-d7591",
    storageBucket: "myhospital-d7591.appspot.com",
    messagingSenderId: "940137699219",
    appId: "1:940137699219:web:b242d3c4bbe2e8b614fa66"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth()
const db = getFirestore()

export { auth, db }