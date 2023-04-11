// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
  //   apiKey: "AIzaSyC6GDGIG0lJ6mgDVIIT2w21nQOOWRRpBm8",
  //   authDomain: "project-final-globant.firebaseapp.com",
  //   projectId: "project-final-globant",
  //   storageBucket: "project-final-globant.appspot.com",
  //   messagingSenderId: "544168496913",
  //   appId: "1:544168496913:web:1403449a338fd9b303c6b0",
  // };
  
  // // Initialize Firebase
  
  
  
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getAuth } from "firebase/auth";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBCbEiLoLbcXysE2vZ_t_hESI3_fWAM_ig",
    authDomain: "pokeapk-3d201.firebaseapp.com",
    projectId: "pokeapk-3d201",
    storageBucket: "pokeapk-3d201.appspot.com",
  messagingSenderId: "78737866057",
  appId: "1:78737866057:web:6f9b9ab4fe779758732e98",
  measurementId: "G-E47KPR0KNC"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// 