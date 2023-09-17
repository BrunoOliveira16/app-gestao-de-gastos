import ChartCategory from '../../components/ChartCategory'
import ChartDescription from '../../components/ChartDescription'
import ChartMonth from '../../components/ChartMonth'
import { useAuthentication } from '../../hooks/useAuthentication'
import { S } from './styles'

const Dashboard = () => {
  const { auth } = useAuthentication()
  const user = auth.currentUser

  return (
    <>
      <S.Title>Olá {user.displayName}</S.Title>
      <S.Container>
        <S.Content>
          <ChartCategory />
        </S.Content>
        <S.Content>
          <ChartDescription />
        </S.Content>
      </S.Container>
      <S.Container>
        <ChartMonth />
      </S.Container>
    </>
  )
}

export default Dashboard
