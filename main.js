import { initializeApp } from  "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { 
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  orderBy
} from  "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyCk91ZVPVhRsDWNK4a6tp1xbH2rMWXC4Go",
  authDomain: "perojekbaru.firebaseapp.com",
  projectId: "perojekbaru",
  storageBucket: "perojekbaru.appspot.com",
  messagingSenderId: "729836730078",
  appId: "1:729836730078:web:4cd56b47d31876b901744f",
  measurementId: "G-404NXCSVMJ"
};

const app = initializeApp(firebaseConfig);