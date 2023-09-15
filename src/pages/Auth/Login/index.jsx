import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuthentication } from '../../../hooks/useAuthentication'

import { S } from './styles'

const Login = ({ toggleShowLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login, error: authError, loading } = useAuthentication()
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')

    const user = {
      email,
      password
    }

    const sucess = await login(user)
    if (sucess) {
      navigate('/myExpenses')
    }
  }

  useEffect(() => {
    if (authError) {
      setError(authError)
    }
  }, [authError])

  return (
    <S.Login>
      <S.Title>Faça Login para acessar o sistema</S.Title>
      <S.Form onSubmit={handleLogin}>
        <S.Label htmlFor="email">Email</S.Label>
        <S.Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <S.Label htmlFor="password">Senha</S.Label>
        <S.Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {!loading && <S.Button type="submit">Entrar</S.Button>}
        {loading && <S.Button disabled>Aguarde...</S.Button>}
        {error && <S.TextError>{error}</S.TextError>}
      </S.Form>
      <S.Text>
        Não possui uma conta?{' '}
        <NavLink id="register" to="/auth" onClick={toggleShowLogin}>
          Registre-se agora
        </NavLink>
      </S.Text>
    </S.Login>
  )
}

export default Login
