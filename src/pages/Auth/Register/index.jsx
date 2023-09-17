import { useState, useEffect } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import { useAuthentication } from '../../../hooks/useAuthentication'

import { S } from './styles'

const Register = ({ toggleShowLogin }) => {
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const { createUser, error: authError, loading } = useAuthentication()

  const handleRegister = async (e) => {
    e.preventDefault()
    setError('')

    const user = {
      displayName,
      email,
      password
    }

    if (password !== confirmPassword) {
      setError('As senhas precisam ser iguais')
      return
    }
    const sucess = await createUser(user)
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
    <S.Register>
      <S.Title>Faça aqui seu cadastro</S.Title>
      <S.Form onSubmit={handleRegister}>
        <S.Label htmlFor="name">Nome</S.Label>
        <S.Input
          type="text"
          id="name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          required
        />
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
        <S.Label htmlFor="confirmPassword">Confirme a senha</S.Label>
        <S.Input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        {!loading && <S.Button type="submit">Entrar</S.Button>}
        {loading && <S.Button disabled>Aguarde...</S.Button>}
        {error && <S.TextError>{error}</S.TextError>}
      </S.Form>
      <S.Text>
        Já possui uma conta?{' '}
        <NavLink id="login" to="/auth" onClick={toggleShowLogin}>
          clique aqui
        </NavLink>
      </S.Text>
    </S.Register>
  )
}

export default Register
