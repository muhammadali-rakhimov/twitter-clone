import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB0zWQfkBD3Gbg6mTh-8qEBs4AeWkp-3AA",
  authDomain: "twitter-clone-6cca6.firebaseapp.com",
  projectId: "twitter-clone-6cca6",
  storageBucket: "twitter-clone-6cca6.appspot.com",
  messagingSenderId: "942641647328",
  appId: "1:942641647328:web:b5d825f78d72b88b7f0a85",
  measurementId: "G-6L2SLD5D5G",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
