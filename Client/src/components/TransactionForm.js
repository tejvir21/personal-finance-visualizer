import React, { useState } from 'react';
import './styles/TransactionForm.css';

const categories = ['Food', 'Transport', 'Rent', 'Utilities', 'Shopping', 'Others'];

function TransactionForm({ onAdd }) {
  const [form, setForm] = useState({
    amount: '',
    description: '',
    date: '',
    category: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.amount || !form.description || !form.date || !form.category) {
      return alert('All fields are required');
    }

    const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/transactions';

    await fetch(`${apiUrl}/transactions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    setForm({ amount: '', description: '', date: '', category: '' });
    onAdd();
  };

  return (
    <form className="transaction-form" onSubmit={handleSubmit}>
      <h3>Add Transaction</h3>
      <input type="number" name="amount" placeholder="Amount" value={form.amount} onChange={handleChange} />
      <input type="text" name="description" placeholder="Description" value={form.description} onChange={handleChange} />
      <input type="date" name="date" value={form.date} onChange={handleChange} />
      <select name="category" value={form.category} onChange={handleChange}>
        <option value="">Select Category</option>
        {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
      </select>
      <button type="submit">Add</button>
    </form>
  );
}

export default TransactionForm;