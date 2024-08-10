import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { people } from '../peopleData';

const hobbiesList = [
  'Reading', 'Cooking', 'Hiking', 'Painting', 'Writing',
  'Photography', 'Cycling', 'Live music', 'Skating', 'Martial Arts'
];

const data = hobbiesList.map(hobby => ({
  hobby,
  frequency: people.filter(person => person.hobbies.includes(hobby)).length,
}));

const RadarChartComponent = () => (
  <ResponsiveContainer width="100%" height="100%">
    <RadarChart data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="hobby" />
      <PolarRadiusAxis />
      <Radar name="Hobbies" dataKey="frequency" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
    </RadarChart>
  </ResponsiveContainer>
);

export default RadarChartComponent;
