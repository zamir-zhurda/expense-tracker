import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts'
import './SpendingChart.css'

function SpendingChart({ transactions }) {
  const spendingByCategory = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + parseFloat(t.amount)
      return acc
    }, {})

  const chartData = Object.keys(spendingByCategory).map(category => ({
    name: category,
    value: spendingByCategory[category]
  }))

  const COLORS = ['#2d5a27', '#8b2727', '#4a2e5a', '#c9a96b', '#1a1a2e', '#55524d']

  return (
    <div className="spending-chart">
      <h3>Spending by Category</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" angle={-45} textAnchor="end" />
          <YAxis />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #eee',
              borderRadius: '8px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}
          />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" radius={[8, 8, 0, 0]} >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default SpendingChart
