import React from 'react';
import { Bar } from 'react-chartjs-2';
import { 
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import styles from './BarCharts.module.css';
import useFilteredData from '../hooks/useFilteredData';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarCharts = ({ selectedSeason, selectedLevel, selectedPass }) => {
    const filteredData = useFilteredData(selectedSeason, selectedLevel, selectedPass);

    const organizeChartData = () => {
        const levelData = {};
        const seasonData = {};
        const ageGroupData = { "<24": 0, "24-28": 0, "29+": 0 };

        filteredData.forEach(({ niveau, saison, age }) => {
            // Levels data:
            levelData[niveau] = (levelData[niveau] || 0) + 1;

            // Seasons data:
            seasonData[saison] = (seasonData[saison] || 0) + 1;
            
            // Age groups data:
            if (age < 24) {
                ageGroupData["<24"] += 1;
            } else if (age >= 24 && age <= 28) {
                ageGroupData["24-28"] += 1;
            } else {
                ageGroupData["29+"] += 1;
            }
        });
        return { levelData, seasonData, ageGroupData}
    }

    const { levelData, seasonData, ageGroupData } = organizeChartData();

    const options = {
        responsive: true,
        plugins: {
            legend: { position: "top" }
        },
    };

    return (
        <div>
            <h2>Statistiques</h2>
            {filteredData.length > 0 ? (
                <div className={styles.barChartsContainer}>
                        <div className={`${styles.chart} ${styles.levelChart}`}>
                            <h3>Quantité par Niveau</h3>
                            <Bar data={{
                                    labels: Object.keys(levelData),
                                    datasets: [{
                                        label: 'Quantité par Niveau',
                                        data: Object.values(levelData),
                                        backgroundColor: 'rgba(75,192,192,0.2)',
                                        borderColor: 'rgba(75,192,192,1)',
                                        borderWidth: 1,
                                    }],
                                }}
                                options={options}
                            />
                        </div>
                    <div className={`${styles.chart} ${styles.seasonChart}`}>
                        <h3>Quantité par Saison</h3>
                        <Bar data={{
                                labels: Object.keys(seasonData),
                                datasets: [{
                                    label: 'Quantité par Saison',
                                    data: Object.values(seasonData),
                                    backgroundColor: 'rgba(255,99,132,0.2)',
                                    borderColor: 'rgba(255,99,132,1)',
                                    borderWidth: 1,
                                }],
                            }}
                            options={options}
                        />
                    </div>
                    <div className={`${styles.chart} ${styles.ageGroupChart}`}>
                        <h3>Quantité par Groupe d'Âge</h3>
                        <Bar data={{
                                labels: Object.keys(ageGroupData),
                                datasets: [{
                                    label: 'Quantité par Groupe d\'Âge',
                                    data: Object.values(ageGroupData),
                                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                                    borderColor: 'rgba(153, 102, 255, 1)',
                                    borderWidth: 1,
                                }]
                            }}
                            options={options}
                        />
                    </div>
                </div>
            ) : (
                <p>Aucunes données...</p>
            )}
        </div>
    );
};

export default BarCharts;