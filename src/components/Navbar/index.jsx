import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ImExit } from 'react-icons/im'
import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'

import { useAuthContext } from '../../context/AuthContext'
import { useAuthentication } from '../../hooks/useAuthentication'

import { S } from './styles'

const Navbar = () => {
  const { user } = useAuthContext()
  const { logout } = useAuthentication()
  const [showMenu, setShowMenu] = useState(false)

  const handleShowMenu = () => {
    if (window.innerWidth <= 690) {
      setShowMenu(!showMenu)
    }
  }

  const handleLogout = async () => {
    await logout()
  }

  return (
    <nav>
      <S.List showMenu={showMenu}>
        {!user && (
          <>
            <S.ListItem onClick={handleShowMenu} showMenu={showMenu}>
              <NavLink id="home" to="/">
                Inicio
              </NavLink>
            </S.ListItem>
            <S.ListItem onClick={handleShowMenu} showMenu={showMenu}>
              <NavLink id="login" to="/auth">
                Login
              </NavLink>
            </S.ListItem>
          </>
        )}
        {user && (
          <>
            <S.ListItem onClick={handleShowMenu} showMenu={showMenu}>
              <NavLink id="dashboard" to="/dashboard">
                Dashboard
              </NavLink>
            </S.ListItem>
            <S.ListItem onClick={handleShowMenu} showMenu={showMenu}>
              <NavLink id="myExpenses" to="/myExpenses">
                Despesas
              </NavLink>
            </S.ListItem>
            <S.ListItem onClick={handleShowMenu} showMenu={showMenu}>
              <ImExit title="logout" onClick={handleLogout} />
            </S.ListItem>
          </>
        )}
      </S.List>
      <S.Mobile>
        {!showMenu ? (
          <FiMenu onClick={() => setShowMenu(!showMenu)} />
        ) : (
          <AiOutlineClose onClick={() => setShowMenu(!showMenu)} />
        )}
      </S.Mobile>
    </nav>
  )
}

export default Navbar
