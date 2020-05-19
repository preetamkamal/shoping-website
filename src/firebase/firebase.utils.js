import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const config = {
  apiKey: "AIzaSyCRs11_otvmxRiEXWhBJj3k0IGpTKQRY9I",
  authDomain: "ecomerce-db-55489.firebaseapp.com",
  databaseURL: "https://ecomerce-db-55489.firebaseio.com",
  projectId: "ecomerce-db-55489",
  storageBucket: "ecomerce-db-55489.appspot.com",
  messagingSenderId: "1079399103312",
  appId: "1:1079399103312:web:a881e84d40cbf5527bca55",
  measurementId: "G-T40C8ML5X0",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// const twitterProvider = new firebase.auth.TwitterAuthProvider();

// export const signInWithTwitter = () => {
//   return firebase
//     .auth()
//     .signInWithPopup(twitterProvider)
//     .then(function (authData) {
//       console.log(authData);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// };
export default firebase;
