import firebase from "firebase/app";
import "firebase/auth";


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAOOZr8QEmHp3Rq6dRCLuVszpiZfY-nP4A",
  authDomain: "gqlreactnode-665f4.firebaseapp.com",
  //databaseURL: "https://gqlreactnode-665f4.firebaseio.com",
  projectId: "gqlreactnode-665f4",
  storageBucket: "gqlreactnode-665f4.appspot.com",
  //messagingSenderId: "902800852834",
  appId: "1:902800852834:web:5c3997ef387c37db464e3b",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
