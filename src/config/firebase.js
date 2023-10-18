// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHr8ULN4C_tJa5xDuCQFxz7I2_D4TVIG4",
  authDomain: "tester-8385f.firebaseapp.com",
  databaseURL: "https://tester-8385f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tester-8385f",
  storageBucket: "tester-8385f.appspot.com",
  messagingSenderId: "51609170690",
  appId: "1:51609170690:web:3012a33de207182954c81b"
};
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);