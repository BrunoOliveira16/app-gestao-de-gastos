import { useState } from 'react'
import { S } from './styles'
import { categories } from '../../utils/categories'

const Modal = ({ expense, handleUpdateExpenses, closeModal }) => {
  const [description, setDescription] = useState(expense.description)
  const [value, setValue] = useState(expense.value)
  const [category, setCategory] = useState(expense.category)
  const [date, setDate] = useState(expense.date)

  const handleUpdate = async (e) => {
    e.preventDefault()

    const updatedItem = {
      ...expense,
      description,
      value: parseFloat(value),
      category,
      date
    }

    const sucess = await handleUpdateExpenses(updatedItem)

    if (sucess) {
      closeModal()
    }
  }

  return (
    <S.Fade>
      <S.Modal>
        <S.Form onSubmit={handleUpdate}>
          <S.Label>Descrição</S.Label>
          <S.Input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <S.Label>Valor</S.Label>
          <S.Input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
          />
          <S.Label>Categoria</S.Label>
          <S.Select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            {categories.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </S.Select>
          <S.Label>Data</S.Label>
          <S.Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <S.ContainerButton>
            <S.Button type="button" onClick={closeModal} colorButton="danger">
              Cancelar
            </S.Button>
            <S.Button type="submit" colorButton="sucess">
              Salvar
            </S.Button>
          </S.ContainerButton>
        </S.Form>
      </S.Modal>
    </S.Fade>
  )
}

export default Modal
