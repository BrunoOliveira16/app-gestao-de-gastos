import { useState } from 'react'
import Login from './Login'
import Register from './Register'

const Auth = () => {
  const [showLogin, setShowLogin] = useState(true)
  const toggleShowLogin = () => setShowLogin(!showLogin)

  return (
    <div>
      {showLogin ? (
        <Login toggleShowLogin={toggleShowLogin} />
      ) : (
        <Register toggleShowLogin={toggleShowLogin} />
      )}
    </div>
  )
}

export default Auth
