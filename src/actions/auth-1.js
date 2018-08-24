import { firebase } from "../firebase/firebase";

export const startLogin = () => {
  return () => {
    var email = "myemail@email.com";
    var password = "mypassword";

    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
  };
};
