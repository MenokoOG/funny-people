import React from 'react';
import { ForceGraph2D } from 'react-force-graph';
import { people } from '../peopleData';
import styled from 'styled-components';

const generateGraphData = (people) => {
  const nodes = people.map((person, index) => ({
    id: index,
    name: person.name,
    group: person.gender === "Male" ? 1 : 2,
  }));

  const links = [];
  for (let i = 0; i < people.length; i++) {
    for (let j = i + 1; j < people.length; j++) {
      const commonHobbies = people[i].hobbies.filter(hobby => people[j].hobbies.includes(hobby));
      if (commonHobbies.length > 0) {
        links.push({
          source: i,
          target: j,
          value: commonHobbies.length
        });
      }
    }
  }

  return { nodes, links };
};

const graphData = generateGraphData(people);

const RelationalChartContainer = styled.div`
  width: 100%;
  height: 80vh;
  background: #121212;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 8px;
`;

const RelationalChart = () => {
  return (
    <RelationalChartContainer>
      <ForceGraph2D
        graphData={graphData}
        nodeLabel="name"
        nodeAutoColorBy="group"
        linkDirectionalParticles="value"
        linkDirectionalParticleSpeed={(d) => d.value * 0.001}
        nodeCanvasObject={(node, ctx, globalScale) => {
          const label = node.name;
          const fontSize = 12 / globalScale;
          ctx.font = `${fontSize}px Sans-Serif`;
          ctx.fillStyle = 'white';
          ctx.fillText(label, node.x, node.y);
        }}
        nodeCanvasObjectMode={() => 'after'}
        linkColor={() => 'rgba(255, 255, 255, 0.6)'}
        linkWidth={d => Math.sqrt(d.value)}
      />
    </RelationalChartContainer>
  );
};

export default RelationalChart;
