import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";


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

export async function ambilDaftarSiswa() {
  const siswaRef = collection(db, "Siswa");
  const q = query(siswaRef, orderBy("nama"));
  const querySnapshot = await getDocs(q);

  let retval = [];
  querySnapshot.forEach((doc) => {
    retval.push({ id: doc.id, nama: doc.data().nama });
  });

  return retval;
}

export async function tambahSiswa(val) {
  try {
    const docRef = await addDoc(collection(db, "Siswa"), {
      nama: val
    });
    console.log('Berhasil menyimpan dokumen dengan ID: ' + docRef.id);
  } catch (e) {
    console.log('Error menambah dokumen' + e);
  }
}
export async function hapusSiswa(docId){
  await deleteDoc(doc(db, "Siswa", docId));
}

export async function ubahSiswa(docId, val) {
 await updateDoc(doc(db,"Siswa",docId), {nama: val }); 
}

export async function ambilSiswa(docId) {
  const docRef = await doc(db, "Siswa", docId);
  const docsnap = await getDoc(docRef);
  
  return await docsnap.data();
}