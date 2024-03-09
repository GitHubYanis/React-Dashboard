import React, { useState } from 'react';
import Filters from '../components/Filters';

const Dashboard = () => {
    // const [selectedSeason, setSelectedSeason] = useState('');
    // const [selectedLevel, setSelectedLevel] = useState('');
    // const [selectedPass, setSelectedPass] = useState('');
  
    // // Event handlers to update state when dropdowns are changed
    // const handleSeasonChange = (value) => {
    //   setSelectedSeason(value);
    // };
  
    // const handleLevelChange = (value) => {
    //   setSelectedLevel(value);
    // };
  
    // const handlePassChange = (value) => {
    //   setSelectedPass(value);
    // };
  
    return (
      <div>
        <Filters/>
          {/* selectedSeason={selectedSeason}
          selectedLevel={selectedLevel}
          selectedPass={selectedPass}
          onSeasonChange={handleSeasonChange}
          onLevelChange={handleLevelChange}
          onPassChange={handlePassChange}
        /> */}
        {/* <AveragePrice
          selectedSeason={selectedSeason}
          selectedLevel={selectedLevel}
          selectedPass={selectedPass}
        />
        <BarCharts
          selectedSeason={selectedSeason}
          selectedLevel={selectedLevel}
          selectedPass={selectedPass}
        /> */}
      </div>
    );
  };
  
  export default Dashboard;