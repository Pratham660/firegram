import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCxR213OGRTYfGvviJPsGDRZN8sw58uM80",
  authDomain: "pratham-firegram.firebaseapp.com",
  projectId: "pratham-firegram",
  storageBucket: "pratham-firegram.appspot.com",
  messagingSenderId: "982394013284",
  appId: "1:982394013284:web:24ea2e11cd8f0035644171",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
