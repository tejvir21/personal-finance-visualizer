import React from 'react';
import './styles/BudgetComparisonChart.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function BudgetComparisonChart({ budgets, actuals }) {
  const data = Object.keys(budgets).map((category) => ({
    category,
    budget: Number(budgets[category]),
    spent: actuals[category] || 0
  }));

  return (
    <div className="card">
      <h3>Budget vs Actual</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="budget" fill="#82ca9d" name="Budget" />
          <Bar dataKey="spent" fill="#8884d8" name="Spent" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BudgetComparisonChart;