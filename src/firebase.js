import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDKIHrlv-oLrdQrVLZaRORsJV6lbeH79Ec",
  authDomain: "products-70f4f.firebaseapp.com",
  projectId: "products-70f4f",
  storageBucket: "products-70f4f.appspot.com",
  messagingSenderId: "709298668055",
  appId: "1:709298668055:web:ed52af51a39389dfe2d252",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };
