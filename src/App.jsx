import { useState, useEffect } from 'react'
import Summary from './components/Summary'
import TransactionForm from './components/TransactionForm'
import TransactionsList from './components/TransactionsList'
import SpendingChart from './components/SpendingChart'

const STORAGE_KEY = 'expense-tracker-transactions'
const sampleTransactions = []

function App() {
  const [transactions, setTransactions] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : sampleTransactions
  })

  // Initialize with some sample data on first visit only
  useEffect(() => {
    const firstVisit = !localStorage.getItem(STORAGE_KEY)
    if (firstVisit && transactions.length === 0) {
      // Add initial sample data once
      const initialData = [
        { id: Date.now() + 1, description: "Initial Salary", amount: 5000, type: "income", category: "salary", date: new Date().toISOString().split('T')[0] },
        { id: Date.now() + 2, description: "Rent Payment", amount: 1200, type: "expense", category: "housing", date: new Date().toISOString().split('T')[0] },
        { id: Date.now() + 3, description: "Groceries", amount: 150, type: "expense", category: "food", date: new Date().toISOString().split('T')[0] },
      ]
      setTransactions(initialData)
    }
  }, [])

  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [type, setType] = useState('expense')
  const [category, setCategory] = useState('food')
  const [filterType, setFilterType] = useState('all')
  const [filterCategory, setFilterCategory] = useState('all')

  const categories = ['food', 'housing', 'utilities', 'transport', 'entertainment', 'salary', 'other']

  // Save transactions to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions))
  }, [transactions])

  let filteredTransactions = transactions
  if (filterType !== 'all') {
    filteredTransactions = filteredTransactions.filter(t => t.type === filterType)
  }
  if (filterCategory !== 'all') {
    filteredTransactions = filteredTransactions.filter(t => t.category === filterCategory)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!description.trim()) {
      // Focus back on description field for feedback
      document.getElementById('desc-input')?.focus()
      return
    }
    if (!amount || isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
      // Focus back on amount field for feedback
      document.getElementById('amount-input')?.focus()
      return
    }

    const newTransaction = {
      id: Date.now(),
      description: description.trim(),
      amount: parseFloat(amount),
      type,
      category,
      date: new Date().toISOString().split('T')[0],
    }

    setTransactions(prev => [...prev, newTransaction])
    setDescription('')
    setAmount('')
    setType('expense')
    setCategory('food')
  }

  const handleDelete = (id) => {
    const item = transactions.find(t => t.id === id)
    if (!item) return

    const confirmed = window.confirm(`Delete "${item.description}"?`)
    if (confirmed) {
      setTransactions(prev => prev.filter(t => t.id !== id))
    }
  }

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <p className="subtitle">Monitor your financial health</p>

      <Summary transactions={transactions} />

      {/* Show chart only after enough expense data */}
      {transactions.filter(t => t.type === 'expense').length >= 5 && (
        <SpendingChart transactions={transactions} />
      )}

      <TransactionForm
        description={description}
        setDescription={setDescription}
        amount={amount}
        setAmount={setAmount}
        type={type}
        setType={setType}
        category={category}
        setCategory={setCategory}
        handleSubmit={handleSubmit}
      />

      <TransactionsList
        filteredTransactions={filteredTransactions}
        categories={categories}
        filterType={filterType}
        setFilterType={setFilterType}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
        handleDelete={handleDelete}
      />
    </div>
  )
}

export default App
