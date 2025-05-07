import React from 'react';
import './styles/CategoryChart.css';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF4444', '#AA66CC'];

function CategoryChart({ transactions }) {
  const dataMap = {};
  transactions.forEach(t => {
    dataMap[t.category] = (dataMap[t.category] || 0) + Number(t.amount);
  });
  const data = Object.entries(dataMap).map(([category, value]) => ({ category, value }));

  return (
    <div className="card">
      <h3>Category Breakdown</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="category" cx="50%" cy="50%" outerRadius={100}>
            {data.map((_, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CategoryChart;