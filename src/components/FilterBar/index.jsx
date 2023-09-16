import { RiSortDesc, RiSortAsc } from 'react-icons/ri'
import { S } from './styles'

const FilterBar = ({
  handleCategoryChange,
  categories,
  handleSortClick,
  sortOrder
}) => {
  return (
    <S.Container>
      <S.Content>
        <h3>Filtrar Categoria:</h3>
        <S.Select
          id="category"
          onChange={(e) => handleCategoryChange(e.target.value)}
          required
        >
          <option value="all">Todos</option>
          {categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
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
