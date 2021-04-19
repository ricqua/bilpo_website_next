import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBMERrQ6jTwgUr3t4p8GiZcA69ItrEd5ow",
  authDomain: "bilpowebsiteav1.firebaseapp.com",
  databaseURL: "https://bilpowebsiteav1-default-rtdb.firebaseio.com",
  projectId: "bilpowebsiteav1",
  // apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
  // databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DB_URL,
  // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }
}

initFirebase();

export { firebase };
