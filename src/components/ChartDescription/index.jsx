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

const ChartDescription = () => {
  const { expenses } = useFetchExpenses()

  // Cria uma lista de descrições de gastos única
  const descriptions = [
    ...new Set(expenses.map((expense) => expense.description))
  ]

  const totalsByDescriptions = descriptions.map((description) => {
    // Filtra as despesas que pertencem a cada descrição
    const expensesInDescription = expenses.filter(
      (expense) => expense.description === description
    )
    // Calcula a soma total dois valores de cada descrição
    const totalInDescription = expensesInDescription.reduce(
      (total, expense) => total + expense.value,
      0
    )

    return { description, total: totalInDescription }
  })

  // Ordena os totais por ordem decrescente
  const sortedTotalsByDescription = totalsByDescriptions.sort(
    (a, b) => b.total - a.total
  )

  // Pegue apenas os primeiros 10 itens
  const top10TotalsByDescription = sortedTotalsByDescription.slice(0, 10)

  const options = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom'
      },
      title: {
        display: true,
        text: 'Top 10 maiores Gastos'
      }
    }
  }

  const data = {
    labels: top10TotalsByDescription.map(({ description }) => description),
    datasets: [
      {
        label: 'Total',
        data: top10TotalsByDescription.map(({ total }) => total),
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      }
    ]
  }

  return (
    <S.Container>
      <Bar data={data} options={options} />
    </S.Container>
  )
}

export default ChartDescription
