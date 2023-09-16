import { useState } from 'react'
import { db } from '../firebase/config'
import {
  collection,
  addDoc,
  updateDoc,
  query,
  where,
  getDocs,
  deleteDoc
} from 'firebase/firestore'
import { useAuthentication } from './useAuthentication'

const useManagerExpenses = () => {
  const { auth } = useAuthentication()
  const user = auth.currentUser
  const [error, setError] = useState(null)
  const expensesRef = user
    ? collection(db, 'users', user.uid, 'expenses')
    : null

  // Cadastrar despesas
  const handleAddExpenses = async (item) => {
    if (!user) return

    try {
      const docRef = await addDoc(expensesRef, item)
      const newItem = { ...item, id: docRef.id }
      await updateDoc(docRef, newItem)
      return true
    } catch (error) {
      setError(
        'Ocorreu um erro ao cadastrar a despesa, por favor tente novamente.'
      )
      return false
    }
  }

  //Deletar despesas
  const handleDeleteExpenses = async (item) => {
    if (!user) return

    try {
      const q = query(expensesRef, where('id', '==', item.id))
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        deleteDoc(doc.ref)
      })
      return true
    } catch (error) {
      setError(
        'Ocorreu um erro ao deletar a despesa, por favor tente novamente.'
      )
      return false
    }
  }

  return { handleAddExpenses, handleDeleteExpenses, error }
}

export default useManagerExpenses
