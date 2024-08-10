import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { people } from '../peopleData';

const zodiacSigns = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
  'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

const data = zodiacSigns.map(sign => {
  const peopleWithSign = people.filter(person => person.sign === sign);
  const averageAge = peopleWithSign.reduce((sum, person) => sum + person.age, 0) / peopleWithSign.length;
  return { sign, averageAge: Math.round(averageAge) };
});

const LineChartComponent = () => (
  <ResponsiveContainer width="100%" height="100%">
    <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="sign" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="averageAge" stroke="#82ca9d" />
    </LineChart>
  </ResponsiveContainer>
);

export default LineChartComponent;
