import React, { useEffect, useState } from 'react';
import BudgetComparisonChart from '../components/BudgetComparisonChart';
import './styles/Budget.css';

const categories = ['Food', 'Transport', 'Rent', 'Utilities', 'Shopping', 'Others'];

function Budget() {
  const [budgets, setBudgets] = useState({});
  const [transactions, setTransactions] = useState([]);

  const fetchData = async () => {
    const res1 = await fetch('http://localhost:5000/api/transactions');
    const data1 = await res1.json();
    setTransactions(data1);

    const res2 = await fetch('http://localhost:5000/api/budgets');
    const data2 = await res2.json();
    const map = {};
    data2.forEach(b => map[b.category] = b.amount);
    setBudgets(map);
  };

  const handleChange = (e, category) => {
    setBudgets({ ...budgets, [category]: e.target.value });
  };

  const handleSave = async () => {
    await fetch('http://localhost:5000/api/budgets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(budgets)
    });
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  const actuals = {};
  transactions.forEach(t => {
    actuals[t.category] = (actuals[t.category] || 0) + Number(t.amount);
  });

  const totalBudget = Object.values(budgets).reduce((acc, v) => acc + Number(v || 0), 0);
  const totalSpent = Object.values(actuals).reduce((acc, v) => acc + Number(v || 0), 0);
  const message = totalSpent > totalBudget
    ? 'You are over budget this month.'
    : 'You are within your budget. Good job!';

  return (
    <div className="card">
      <h3>Budgeting</h3>
      {categories.map(cat => (
        <div key={cat}>
          <label>{cat}</label>
          <input
            type="number"
            value={budgets[cat] || ''}
            onChange={(e) => handleChange(e, cat)}
          />
          <span> Spent: ₹{actuals[cat] || 0}</span>
        </div>
      ))}
      <button onClick={handleSave}>Save Budgets</button>
      <BudgetComparisonChart budgets={budgets} actuals={actuals} />
      <p><strong>{message}</strong></p>
    </div>
  );
}

export default Budget;