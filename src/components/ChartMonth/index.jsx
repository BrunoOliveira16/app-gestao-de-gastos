import { useState, useEffect } from 'react'
import useFetchExpenses from '../../hooks/useFetchExpenses'
import { monthList } from '../../utils/Lists'
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

const ChartMonth = () => {
  const { expenses } = useFetchExpenses()
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
  const [chartData, setChartData] = useState(null)

  useEffect(() => {
    const totalsByMonth = {}
    const months = monthList

    expenses.forEach((expense) => {
      const date = new Date(expense.date)
      const month = date.getMonth() + 1
      const year = date.getFullYear()

      if (year === selectedYear) {
        totalsByMonth[month] = (totalsByMonth[month] || 0) + expense.value
      }
    })

    const data = months.map((month, index) => {
      const key = index + 1
      return totalsByMonth[key] || 0
    })

    setChartData({
      labels: months,
      datasets: [
        {
          label: 'Total',
          data,
          backgroundColor: 'rgba(255, 99, 132, 0.5)'
        }
      ]
    })
  }, [expenses, selectedYear])

  //Cria um array de anos únicos - Para ser consumido no select
  const years = [
    ...new Set(
      expenses.map((expenses) => new Date(expenses.date).getFullYear())
    )
  ]

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom'
      },
      title: {
        display: true,
        text: 'Total por Mês'
      }
    }
  }

  return (
    <S.Container>
      <S.Menu>
        <h2>Visão geral</h2>
        <h2>
          Ano:
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(Number(e.target.value))}
          >
            {years.map((year) => (
              <option value={year} key={year}>
                {year}
              </option>
            ))}
          </select>
        </h2>
      </S.Menu>
      <S.Content>
        {chartData && <Bar data={chartData} options={options} />}
      </S.Content>
    </S.Container>
  )
}

export default ChartMonth
