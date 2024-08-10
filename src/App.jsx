import React, { useState } from 'react';
import RelationalChart from './components/RelationalChart';
import BarChartComponent from './components/BarChartComponent';
import PieChartComponent from './components/PieChartComponent';
import LineChartComponent from './components/LineChartComponent';
import RadarChartComponent from './components/RadarChartComponent';
import ScatterPlotComponent from './components/ScatterPlotComponent';
import ChartModal from './components/ChartModal';
import './index.css';
import styled from 'styled-components';

const Button = styled.button`
  background: #4CAF50;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
`;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong. Please try again later.</h2>;
    }

    return this.props.children;
  }
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedChart, setSelectedChart] = useState(null);

  const openModal = (chartType) => {
    setSelectedChart(chartType);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedChart(null);
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-6">Interactive Charts Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Button onClick={() => openModal('relational')}>Relational Chart</Button>
          <Button onClick={() => openModal('bar')}>Bar Chart</Button>
          <Button onClick={() => openModal('pie')}>Pie Chart</Button>
          <Button onClick={() => openModal('line')}>Line Chart</Button>
          <Button onClick={() => openModal('radar')}>Radar Chart</Button>
          <Button onClick={() => openModal('scatter')}>Scatter Plot</Button>
        </div>
        <ChartModal isOpen={isModalOpen} onRequestClose={closeModal}>
          {selectedChart === 'relational' && <RelationalChart />}
          {selectedChart === 'bar' && <BarChartComponent />}
          {selectedChart === 'pie' && <PieChartComponent />}
          {selectedChart === 'line' && <LineChartComponent />}
          {selectedChart === 'radar' && <RadarChartComponent />}
          {selectedChart === 'scatter' && <ScatterPlotComponent />}
        </ChartModal>
      </div>
    </ErrorBoundary>
  );
}

export default App;
