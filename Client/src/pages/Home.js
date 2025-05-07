import React, { useEffect, useState } from 'react';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';
import SummaryCards from '../components/SummaryCards';
import CategoryChart from '../components/CategoryChart';
import './styles/Home.css';

function Home() {
  const [transactions, setTransactions] = useState([]);

  const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/transactions';

  const fetchTransactions = async () => {
    const res = await fetch(`${apiUrl}/transactions`);
    const data = await res.json();
    setTransactions(data);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div className="home-container">
      <div className="home-section">
        <h2>Add Transaction</h2>
        <TransactionForm onAdd={fetchTransactions} />
      </div>
      <div className="home-section">
        <h2>Summary</h2>
        <SummaryCards transactions={transactions} />
      </div>
      <div className="home-section">
        <h2>Category Breakdown</h2>
        <CategoryChart transactions={transactions} />
      </div>
      <div className="home-section">
        <h2>Transaction List</h2>
        <TransactionList transactions={transactions} onUpdate={fetchTransactions} />
      </div>
    </div>
  );
}

export default Home;