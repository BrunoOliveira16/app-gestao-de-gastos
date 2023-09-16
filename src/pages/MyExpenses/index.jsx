import { BsPencilSquare, BsTrash } from 'react-icons/bs'
import { S } from './styles'
import FilterBar from '../../components/FilterBar'
import RegisterBar from '../../components/RegisterBar'
import useFetchExpenses from '../../hooks/useFetchExpenses'
import useManagerExpenses from '../../hooks/useManagerExpenses'

const MyExpenses = () => {
  const { expenses, loading } = useFetchExpenses()
  const { handleDeleteExpenses } = useManagerExpenses()

  const handleEdit = () => {
    console.log('editar')
  }

  const handleDelete = async (item) => {
    await handleDeleteExpenses(item)
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
        {!loading &&
          expenses.map((expense) => {
            console.log(expense)
            return (
              <S.Body key={expense.id}>
                <S.BodyItem>{expense.category}</S.BodyItem>
                <S.BodyItem>{expense.description}</S.BodyItem>
                <S.BodyItem>R$ {expense.value}</S.BodyItem>
                <S.BodyItem>{expense.date}</S.BodyItem>
                <S.BodyAction>
                  <BsPencilSquare
                    onClick={() => handleEdit(expense)}
                    title="editar"
                  />
                  <BsTrash
                    onClick={() => handleDelete(expense)}
                    title="remover"
                  />
                </S.BodyAction>
              </S.Body>
            )
          })}
      </S.Container>
    </>
  )
}

export default MyExpenses
