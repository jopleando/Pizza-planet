import Firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDp_5O0duuAGA4QV9k9ZribxeU6LpEfvhI",
    authDomain: "pizza-planet-huelin.firebaseapp.com",
    databaseURL: "https://pizza-planet-huelin.firebaseio.com",
    projectId: "pizza-planet-huelin",
    storageBucket: "pizza-planet-huelin.appspot.com",
    messagingSenderId: "647113927581"
  };

 const firebaseApp = Firebase.initializeApp(config);
 const db = firebaseApp.database();
 export const dbMenuRef = db.ref('menu');
 //export const dbLoginRef=db.ref('login');
