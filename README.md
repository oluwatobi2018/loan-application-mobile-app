# loan-application-mobile-app
A loan application mobile app using react native
Simple Loan App built with react native and typescript
This is a simple loan application created in react native and firebase with Rave APIs used in handling various payments.

Prerequisites
Rave Test and Live Accounts
Node and NPM (mostly together as a package)
React-Native CLI or Create-React-Native-App.
Rave React-Native SDK.
Firebase Account
Expo (Optional, used as our debugging tool)
Dependencies
Running $ npm install in your terminal, which installs:

react-navigation
firebase
react-native-rave
How To Set It Up Locally
Note: We need Rave Test or/and Live account to run this app.

Also ensure you have Expo CLI installed and also Expo Client installed on your mobile phone depending on your phone type Google Play for Android phones and Apple Store for iOs mobile phones to scan the qr code displayed on the terminal window.

To use this project locally you can clone this repo here:

Open your Terminal/Command Prompt
$ git clone bitbucket.org/oluwatobi2018/lendsqr.fe.test
$ cd lendsqr.fe.test/src/Main // change directory into cloned app directory
$ npm install // To install all dependencies
$ expo start // This is used to start our project from the Expo CLI
File Structure
lenssqr.fe.test
+ assets
+ components
- libraries
 - Firebase.js
- screens
 - AccountScreen.js
 - ApplyScreen.js
 - BvnScreen.js
 - ChargeScreen.js
 - HistoryScreen.js
 - HomeScreen.js
- src
 - assets
- App.js
- package.json
After the app has been successfully scanned and built, it should bring out this:

Loan App Screen

For Our Firebase Database, you need to open a firebase account here, then open the libraries directory in our project directory after that we then add your database configuration to file Firebase.js which has this code sample:
``` import firebase from 'firebase';

// Initialize Firebase var config = { apiKey: "<YOUR-FIREBASE-API-KEY>", authDomain: "<YOUR-FIREBASE-AUTH-DOMAIN>", databaseURL: "<YOUR-FIREBASE-DATABASE-URL>", projectId: "<PROJECT_ID>", storageBucket: "<YOUR-FIREBASE-STORAGE-BUCKET>", messagingSenderId: "<SENDER_ID>" };

const Firebase = firebase.initializeApp(config);

export default Firebase; to

MOCK API
API Key:Get user details by id https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/:id Get all users https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users

DESIGN: https://www.figma.com/file/ZKILoCoIoy1IESdBpq3GNC/Frontend
