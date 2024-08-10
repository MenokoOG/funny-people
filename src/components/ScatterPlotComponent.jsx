import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { people } from '../peopleData';

const ScatterPlotComponent = () => {
  const data = people.map(person => ({
    x: person.age,
    y: person.height,
  }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ScatterChart margin={{ top: 20, right: 30, bottom: 5, left: 20 }}>
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="Age" />
        <YAxis type="number" dataKey="y" name="Height (cm)" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter name="Age vs Height" data={data} fill="#82ca9d" />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default ScatterPlotComponent;
