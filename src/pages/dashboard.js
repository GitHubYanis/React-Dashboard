import React, { useState } from 'react';
import Filters from '../components/Filters';
import AveragePrice from '../components/AveragePrice';
import BarCharts from '../components/BarCharts';
import styles from './dashboard.module.css';

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
      <div className={styles.dashboardContainer}>
        <h1>Tableau de bord</h1>
        <div>
            <Filters
            selectedSeason={selectedSeason}
            selectedLevel={selectedLevel}
            selectedPass={selectedPass}
            onSeasonChange={handleSeasonChange}
            onLevelChange={handleLevelChange}
            onPassChange={handlePassChange}
            />
            <div className={styles.outputsContainer}>
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
        </div>
      </div>
    );
  };

  export default Dashboard;