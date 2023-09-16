import { useState, useEffect } from 'react'
import { db } from '../firebase/config'
import { collection, onSnapshot } from 'firebase/firestore'
import { useAuthentication } from './useAuthentication'

const useFetchExpenses = () => {
  const { auth } = useAuthentication()
  const user = auth.currentUser
  const [expenses, setExpenses] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) return

    const expensesRef = collection(db, 'users', user.uid, 'expenses')
    const unsubscribe = onSnapshot(expensesRef, (snapShot) => {
      const expensesList = snapShot.docs.map((doc) => doc.data())
      setExpenses(expensesList)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [user])

  return { expenses, loading }
}

export default useFetchExpenses
