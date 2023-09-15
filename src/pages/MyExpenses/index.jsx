import { BsPencilSquare, BsTrash } from 'react-icons/bs'
import { S } from './styles'
import FilterBar from '../../components/FilterBar'
import RegisterBar from '../../components/RegisterBar'

const MyExpenses = () => {
  const handleEdit = () => {
    console.log('editar')
  }

  const handleDelete = () => {
    console.log('deletar')
  }

  return (
    <>
      <S.Title>Minhas Despesas</S.Title>
      <FilterBar />
      <RegisterBar />
      <S.Container>
        <S.Header>
          <S.HeaderItem>Categoria</S.HeaderItem>
          <S.HeaderItem>Descrição</S.HeaderItem>
          <S.HeaderItem>Valor</S.HeaderItem>
          <S.HeaderItem>Data</S.HeaderItem>
          <S.HeaderItem>Ação</S.HeaderItem>
        </S.Header>
        <S.Body>
          <S.BodyItem>Alimentação</S.BodyItem>
          <S.BodyItem>Mercadinho da esquina</S.BodyItem>
          <S.BodyItem>R$ 30,00</S.BodyItem>
          <S.BodyItem>20/09/2023</S.BodyItem>
          <S.BodyAction>
            <BsPencilSquare onClick={() => handleEdit()} title="editar" />
            <BsTrash onClick={() => handleDelete()} title="remover" />
          </S.BodyAction>
        </S.Body>
        <S.Body>
          <S.BodyItem>Alimentação</S.BodyItem>
          <S.BodyItem>Mercadinho da esquina</S.BodyItem>
          <S.BodyItem>R$ 30,00</S.BodyItem>
          <S.BodyItem>20/09/2023</S.BodyItem>
          <S.BodyAction>
            <BsPencilSquare onClick={() => handleEdit()} />
            <BsTrash onClick={() => handleDelete()} />
          </S.BodyAction>
        </S.Body>
        <S.Body>
          <S.BodyItem>Alimentação</S.BodyItem>
          <S.BodyItem>Mercadinho da esquina</S.BodyItem>
          <S.BodyItem>R$ 30,00</S.BodyItem>
          <S.BodyItem>20/09/2023</S.BodyItem>
          <S.BodyAction>
            <BsPencilSquare onClick={() => handleEdit()} />
            <BsTrash onClick={() => handleDelete()} />
          </S.BodyAction>
        </S.Body>
        <S.Body>
          <S.BodyItem>Alimentação</S.BodyItem>
          <S.BodyItem>Mercadinho da esquina</S.BodyItem>
          <S.BodyItem>R$ 30,00</S.BodyItem>
          <S.BodyItem>20/09/2023</S.BodyItem>
          <S.BodyAction>
            <BsPencilSquare onClick={() => handleEdit()} />
            <BsTrash onClick={() => handleDelete()} />
          </S.BodyAction>
        </S.Body>
      </S.Container>

      {/* <S.Container>
        <S.Card>
          <S.CardLogo>
            <h2>img</h2>
          </S.CardLogo>
          <S.CardBody>
            <S.CardContent>
              <S.TextPrimary>Almoço hshajshajsa</S.TextPrimary>
              <S.TextPrimary>R$ 10,00</S.TextPrimary>
            </S.CardContent>
            <S.CardContent>
              <S.TextSecond>Alimentação</S.TextSecond>
              <S.TextSecond>15/10/2023</S.TextSecond>
            </S.CardContent>
          </S.CardBody>
          <S.CardFeature>
            <BsPencilSquare onClick={() => handleEdit()} />
            <BsTrash onClick={() => handleDelete()} />
          </S.CardFeature>
        </S.Card>
        <S.Card>
          <S.CardLogo>
            <h2>img</h2>
          </S.CardLogo>
          <S.CardBody>
            <S.CardContent>
              <S.TextPrimary>Almoço hshajshajsa</S.TextPrimary>
              <S.TextPrimary>R$ 10,00</S.TextPrimary>
            </S.CardContent>
            <S.CardContent>
              <S.TextSecond>Alimentação</S.TextSecond>
              <S.TextSecond>15/10/2023</S.TextSecond>
            </S.CardContent>
          </S.CardBody>
          <S.CardFeature>
            <BsPencilSquare onClick={() => handleEdit()} />
            <BsTrash onClick={() => handleDelete()} />
          </S.CardFeature>
        </S.Card>
        <S.Card>
          <S.CardLogo>
            <h2>img</h2>
          </S.CardLogo>
          <S.CardBody>
            <S.CardContent>
              <S.TextPrimary>Almoço hshajshajsa</S.TextPrimary>
              <S.TextPrimary>R$ 10,00</S.TextPrimary>
            </S.CardContent>
            <S.CardContent>
              <S.TextSecond>Alimentação</S.TextSecond>
              <S.TextSecond>15/10/2023</S.TextSecond>
            </S.CardContent>
          </S.CardBody>
          <S.CardFeature>
            <BsPencilSquare onClick={() => handleEdit()} />
            <BsTrash onClick={() => handleDelete()} />
          </S.CardFeature>
        </S.Card>
      </S.Container> */}
    </>
  )
}

export default MyExpenses
