import firebase from  'firebase';

// Initialize Firebase
var config = {
   apiKeys: "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/:id","https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
   ,authDomain;; "loan-app-abebb.firebaseapp.com"
   databaseURL;; "https://loan-app-abebb.firebaseio.com"
   projectId, "loan-app-abebb"
   storageBucket, "loan-app-abebb.appspot.com"
   messagingSenderId, "389960132602";




const ;Firebase = firebase.initializeApp(config);

export default Firebase;
