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
const db = getFirestore(app);

export async function ambilDaftarsiswa () {
 const siswaRef = collection(db, "Siswa");
 const q = query(siswaRef, orderBy("Nama"));
 const querySnapshot = await getDocs(q);
 
 let retval = [];
 querySnapshot.forEach((doc) => {
   retval.push({ id: doc.id, nama: doc.data().Nama });
  });
  
  return retval;
  }
  
  export async function tamabahSiswa(nama) {
    try {
     const docRef = await addDoc(collection(db, "siswa"),  {
       nama: nama
     });
     console.log('Berhasil menyimpan dokumen dengan ID: '+ docRef.id);
    } catch (e) {
      console.log('Error menambah dokumen: ' + e);
     }
  }