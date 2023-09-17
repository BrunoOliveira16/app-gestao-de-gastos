import useFetchExpenses from '../../hooks/useFetchExpenses'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { S } from './styles'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const ChartCategory = () => {
  const { categories, expenses } = useFetchExpenses()

  const totalsByCategory = categories.map((category) => {
    // Filtra as despesas que pertencem a cada categoria
    const expensesInCategory = expenses.filter(
      (expense) => expense.category === category
    )

    // Calcula a soma total das despesas de cada categoria
    const totalInCategory = expensesInCategory.reduce(
      (total, expense) => total + expense.value,
      0
    )

    return { category, total: totalInCategory }
  })

  // Ordena os totais por ordem decrescente
  const sortedTotalsByCategory = totalsByCategory.sort(
    (a, b) => b.total - a.total
  )

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom'
      },
      title: {
        display: true,
        text: 'Total por categoria'
      }
    }
  }

  const data = {
    labels: sortedTotalsByCategory.map(({ category }) => category),
    datasets: [
      {
        label: 'Total',
        data: sortedTotalsByCategory.map(({ total }) => total),
        backgroundColor: 'rgba(53, 162, 235, 0.5)'
      }
    ]
  }

  return (
    <S.Container>
      <Bar data={data} options={options} />
    </S.Container>
  )
}

export default ChartCategory
