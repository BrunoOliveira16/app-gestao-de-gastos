import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { useAuthentication } from './hooks/useAuthentication'
import { AuthContextProvider } from './context/AuthContext'

import Auth from './pages/Auth'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import MyExpenses from './pages/MyExpenses'

import Header from './components/Header'

import GlobalStyle from './globalStyles'

function App() {
  const [user, setUser] = useState(undefined)
  const { auth } = useAuthentication()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  return (
    <AuthContextProvider value={{ user }}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route
            path="/"
            element={!user ? <Home /> : <Navigate to="/myExpenses" />}
          />
          <Route
            path="/auth"
            element={!user ? <Auth /> : <Navigate to="/" />}
          />
          <Route
            path="/dashboard"
            element={user ? <Dashboard /> : <Navigate to="/Auth" />}
          />
          <Route
            path="/myExpenses"
            element={user ? <MyExpenses /> : <Navigate to="/Auth" />}
          />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  )
}

export default App
