import { useState } from 'react'
import { BsPencilSquare, BsTrash } from 'react-icons/bs'
import { S } from './styles'
import FilterBar from '../../components/FilterBar'
import RegisterBar from '../../components/RegisterBar'
import Modal from '../../components/Modal'
import useFetchExpenses from '../../hooks/useFetchExpenses'
import useManagerExpenses from '../../hooks/useManagerExpenses'

const MyExpenses = () => {
  const { expenses, loading, categories } = useFetchExpenses()
  const { handleDeleteExpenses, handleUpdateExpenses } = useManagerExpenses()
  const [editingExpense, setEditingExpense] = useState(null)
  const [filteredCategory, setFilteredCategory] = useState('all')
  const [sortOrder, setSortOrder] = useState('desc')

  function formatDate(isoString) {
    const [year, month, day] = isoString.split('-')
    return `${day}/${month}/${year}`
  }

  const handleEdit = (expense) => {
    setEditingExpense(expense)
  }

  const handleDelete = async (item) => {
    await handleDeleteExpenses(item)
  }

  const handleCategoryChange = (category) => {
    setFilteredCategory(category)
  }

  const handleSortClick = () => {
    if (sortOrder === 'desc') {
      setSortOrder('asc')
    } else {
      setSortOrder('desc')
    }
  }

  const filteredExpenses = expenses.filter(
    (expense) =>
      filteredCategory === 'all' || expense.category === filteredCategory
  )

  const sortedExpenses = [...filteredExpenses].sort((a, b) => {
    if (sortOrder === 'desc') {
      return b.value - a.value
    } else {
      return a.value - b.value
    }
  })

  return (
    <S.MyExpenses>
      {editingExpense && (
        <Modal
          expense={editingExpense}
          handleUpdateExpenses={handleUpdateExpenses}
          closeModal={() => setEditingExpense(null)}
        />
      )}
      <S.Title>Minhas Despesas</S.Title>
      <FilterBar
        categories={categories}
        handleCategoryChange={handleCategoryChange}
        handleSortClick={handleSortClick}
        sortOrder={sortOrder}
      />
      <RegisterBar />
      <S.Container>
        <S.Header>
          <S.HeaderItem>Descrição</S.HeaderItem>
          <S.HeaderItem>Valor</S.HeaderItem>
          <S.HeaderItem>Categoria</S.HeaderItem>
          <S.HeaderItem>Data</S.HeaderItem>
          <S.HeaderItem>Ação</S.HeaderItem>
        </S.Header>
        {!loading &&
          sortedExpenses.map((expense, index) => {
            return (
              <S.BodyContent key={index}>
                <S.Body key={expense.id}>
                  <S.BodyItem $textBold>{expense.description}</S.BodyItem>
                  <S.BodyItem $textBold>R$ {expense.value}</S.BodyItem>
                  <S.BodyItem>{expense.category}</S.BodyItem>
                  <S.BodyItem>{formatDate(expense.date)}</S.BodyItem>
                </S.Body>
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
              </S.BodyContent>
            )
          })}
      </S.Container>
    </S.MyExpenses>
  )
}

export default MyExpenses
