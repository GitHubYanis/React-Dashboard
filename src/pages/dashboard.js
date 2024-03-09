import React, { useState } from 'react';
import Filters from '../components/Filters';
import AveragePrice from '../components/AveragePrice';
import BarCharts from '../components/BarCharts';

const Dashboard = () => {
    const [selectedSeason, setSelectedSeason] = useState('');
    const [selectedLevel, setSelectedLevel] = useState('');
    const [selectedPass, setSelectedPass] = useState('');
  
    const handleSeasonChange = (value) => {
      setSelectedSeason(value);
    };
  
    const handleLevelChange = (value) => {
      setSelectedLevel(value);
    };
  
    const handlePassChange = (value) => {
      setSelectedPass(value);
    };
  
    return (
      <div>
        <Filters
          selectedSeason={selectedSeason}
          selectedLevel={selectedLevel}
          selectedPass={selectedPass}
          onSeasonChange={handleSeasonChange}
          onLevelChange={handleLevelChange}
          onPassChange={handlePassChange}
        />
        <AveragePrice
          selectedSeason={selectedSeason}
          selectedLevel={selectedLevel}
          selectedPass={selectedPass}
        />
        <BarCharts
          selectedSeason={selectedSeason}
          selectedLevel={selectedLevel}
          selectedPass={selectedPass}
        />
      </div>
    );
  };
  export default Dashboard;