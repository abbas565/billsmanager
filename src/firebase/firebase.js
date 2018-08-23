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

export { firebase, database as default };

// database
//   .ref("expenses")
//   .once("value")
//   .then(snapshot => {
//     const expenses = [];

//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log("expenses:", expenses);
//   });

// database.ref("expenses").on("value", snapshot => {
//   const expenses = [];
//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log("expenses:", expenses);
// });

// database.ref("expenses").push({
//   description: "water bill",
//   note: "this is note for water",
//   amount: 100,
//   createdAt: 1250
// });
