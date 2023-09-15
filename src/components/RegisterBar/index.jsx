import { useState } from 'react'
import { S } from './styles'

const RegisterBar = () => {
  const [description, setDescription] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')
  const [date, setDate] = useState(null)

  const handleCreateExpenses = (e) => {
    e.preventDefault()
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
          <S.Input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
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
