import { useState } from 'react'
import useManagerExpenses from '../../hooks/useManagerExpenses'
import { S } from './styles'
import { categories } from '../../utils/Lists'

const RegisterBar = () => {
  const [description, setDescription] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')
  const [date, setDate] = useState('')
  const { handleAddExpenses, error } = useManagerExpenses()

  const handleCreateExpenses = async (e) => {
    e.preventDefault()

    const item = {
      description,
      value: parseFloat(value),
      category,
      date
    }

    const sucess = await handleAddExpenses(item)

    if (sucess) {
      setDescription('')
      setValue(0)
      setCategory('')
      setDate('')
    } else {
      console.log(error)
    }
  }

  return (
    <>
      <S.Form onSubmit={handleCreateExpenses}>
        <S.InputContainer>
          <S.Label>Descrição</S.Label>
          <S.Input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </S.InputContainer>
        <S.InputContainer>
          <S.Label>Valor</S.Label>
          <S.Input
            type="number"
            id="value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
          />
        </S.InputContainer>
        <S.InputContainer>
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
        </S.InputContainer>
        <S.InputContainer>
          <S.Label>Data</S.Label>
          <S.Input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </S.InputContainer>
        <S.InputContainer>
          <S.Button type="submit">Cadastrar</S.Button>
        </S.InputContainer>
      </S.Form>
    </>
  )
}

export default RegisterBar
