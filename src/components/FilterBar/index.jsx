import { useState } from 'react'
import { RiSortDesc, RiSortAsc } from 'react-icons/ri'
import { S } from './styles'

const FilterBar = () => {
  const [sortOrder, setSortOrder] = useState('desc')

  const handleSortClick = () => {
    if (sortOrder === 'desc') {
      setSortOrder('asc')
    } else {
      setSortOrder('desc')
    }
  }

  return (
    <S.Container>
      <S.Content>
        <h3>Filtrar Categoria:</h3>
        <S.Select name="select">
          <option>Todos</option>
          <option>Alimentação</option>
          <option>Educação</option>
          <option>Lazer</option>
        </S.Select>
      </S.Content>
      <S.Content>
        <h3>Filtrar Valor:</h3>
        <S.FilterValue onClick={handleSortClick}>
          {sortOrder === 'desc' ? <RiSortDesc /> : <RiSortAsc />}
        </S.FilterValue>
      </S.Content>
    </S.Container>
  )
}

export default FilterBar
