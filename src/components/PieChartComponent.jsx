import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { people } from '../peopleData';

const PieChartComponent = () => {
  const data = [
    { name: 'Male', value: people.filter(person => person.gender === 'Male').length },
    { name: 'Female', value: people.filter(person => person.gender === 'Female').length },
    { name: 'Non-binary', value: people.filter(person => person.gender === null).length },
  ];

  const COLORS = ['#0088FE', '#FFBB28', '#FF8042'];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
