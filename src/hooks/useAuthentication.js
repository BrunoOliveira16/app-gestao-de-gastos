import { useState } from 'react'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut
} from 'firebase/auth'

export const useAuthentication = () => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)
  const auth = getAuth()

  // Criando usuário
  const createUser = async (data) => {
    setLoading(true)
    setError(null)

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )

      await updateProfile(user, {
        displayName: data.displayName
      })

      setLoading(false)
      return user
    } catch (error) {
      let systemErrorMessage

      if (error.message.includes('weak-password')) {
        systemErrorMessage = 'A senha precisa conter pelo menos 6 caracteres'
      } else if (error.message.includes('email-already-in-use')) {
        systemErrorMessage = 'E-mail já cadastrado.'
      } else {
        systemErrorMessage = 'Ocorreu um erro, por favor tente mais tarde.'
      }

      setLoading(false)
      setError(systemErrorMessage)
      return false
    }
  }

  // Logout do usuário
  const logout = async () => {
    await signOut(auth)
  }

  // Login do usuário
  const login = async (data) => {
    setLoading(true)
    setError(false)

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password)
      setLoading(false)
      return true
    } catch (error) {
      let systemErrorMessage

      if (error.message.includes('auth/invalid-login-credentials')) {
        systemErrorMessage = 'E-mail ou Senha incorreta, tente novamente'
      } else {
        systemErrorMessage = 'Ocorreu um erro, por favor tente mais tarde.'
      }
      setLoading(false)
      setError(systemErrorMessage)
      return false
    }
  }

  return { auth, createUser, error, loading, logout, login }
}
