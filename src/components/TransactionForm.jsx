import './TransactionForm.css'

function TransactionForm({ description, setDescription, amount, setAmount, type, setType, category, setCategory, handleSubmit }) {
  return (
    <div className="add-transaction">
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="desc-input">Description</label>
          <input
            id="desc-input"
            type="text"
            placeholder="e.g., Grocery shopping"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="amount-input">Amount</label>
          <input
            id="amount-input"
            type="number"
            placeholder="0.00"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="ttype">Type</label>
          <select id="ttype" value={type} onChange={(e) => setType(e.target.value)}>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <div>
          <label htmlFor="ccat">Category</label>
          <select id="ccat" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="food">Food</option>
            <option value="housing">Housing</option>
            <option value="utilities">Utilities</option>
            <option value="transport">Transport</option>
            <option value="entertainment">Entertainment</option>
            <option value="salary">Salary</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  )
}

export default TransactionForm
