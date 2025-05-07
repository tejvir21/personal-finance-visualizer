import React from 'react';
import './styles/TransactionList.css';

function TransactionList({ transactions, onUpdate }) {
  const handleDelete = async (id) => {
    const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/transactions';

    await fetch(`${apiUrl}/transactions/` + id, { method: 'DELETE' });
    onUpdate();
  };

  return (
    <div className="card">
      <h3>Recent Transactions</h3>
      <ul>
        {transactions.map((t) => (
          <li key={t._id}>
            ₹{t.amount} - {t.category} - {t.description} on {new Date(t.date).toLocaleDateString()}
            <button
              onClick={() => handleDelete(t._id)}
              style={{
                backgroundColor: '#ff4d4d',
                color: 'white',
                border: 'none',
                padding: '5px 10px',
                cursor: 'pointer',
                borderRadius: '5px',
                width: 'max-content',
                display: 'inline-block',
                marginLeft: '10px',
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;