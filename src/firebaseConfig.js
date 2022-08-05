import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYd0HNY3RG2rGEIYCz6--MEtJiDywravM",
  authDomain: "clone-whatsapp-777.firebaseapp.com",
  projectId: "clone-whatsapp-777",
  storageBucket: "clone-whatsapp-777.appspot.com",
  messagingSenderId: "235205796784",
  appId: "1:235205796784:web:409db6c692641a6e556c75",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
