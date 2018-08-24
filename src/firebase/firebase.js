import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyCNSZywfuFvoj9TYST75RdnEP1BjkY9A5A",
  authDomain: "billsmanage-b1285.firebaseapp.com",
  databaseURL: "https://billsmanage-b1285.firebaseio.com",
  projectId: "billsmanage-b1285",
  storageBucket: "billsmanage-b1285.appspot.com",
  messagingSenderId: "1019978088992"
};
firebase.initializeApp(config);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
