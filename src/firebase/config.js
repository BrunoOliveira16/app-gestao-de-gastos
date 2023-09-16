import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyArI7IvH045pezxUp_-OpUi26rqqBzVrr4',
  authDomain: 'app-gestao-de-gastos.firebaseapp.com',
  projectId: 'app-gestao-de-gastos',
  storageBucket: 'app-gestao-de-gastos.appspot.com',
  messagingSenderId: '445050772901',
  appId: '1:445050772901:web:b8e9144c428968e60a5c4c'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
