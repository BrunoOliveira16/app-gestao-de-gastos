import { S } from './styles'
import { Wrapper } from '../../globalStyles'
import Navbar from '../Navbar'
import Logo from '../../assets/icons8-dinheiro-100.png'

const Header = () => {
  return (
    <S.Header>
      <S.HeaderContainer>
        <Wrapper>
          <S.HeaderBrand>
            <img src={Logo} alt="Logo da página" />
            <h1>Despesa Inteligente</h1>
          </S.HeaderBrand>
          <Navbar />
        </Wrapper>
      </S.HeaderContainer>
    </S.Header>
  )
}

export default Header
