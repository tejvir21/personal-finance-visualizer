import React from 'react';
import './styles/SummaryCards.css';

function SummaryCards({ transactions }) {
  const total = transactions.reduce((sum, t) => sum + Number(t.amount), 0);
  const recent = transactions.slice(0, 3);

  const categoryMap = {};
  transactions.forEach(t => {
    categoryMap[t.category] = (categoryMap[t.category] || 0) + Number(t.amount);
  });

  return (
    <div className="card">
      <h3>Summary</h3>
      <p><strong>Total Expenses:</strong> ₹{total}</p>
      <p><strong>Category Breakdown:</strong></p>
      <ul>
        {Object.entries(categoryMap).map(([cat, amt]) => (
          <li key={cat}>{cat}: ₹{amt}</li>
        ))}
      </ul>
      <p><strong>Most Recent:</strong></p>
      <ul>
        {recent.map(t => <li key={t._id}>{t.description} - ₹{t.amount}</li>)}
      </ul>
    </div>
  );
}

export default SummaryCards;