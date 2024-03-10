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

const BarCharts = ({ selectedSeason, selectedLevel, selectedPass, onSeasonChange, onLevelChange}) => {
    const filteredData = useFilteredData(selectedSeason, selectedLevel, selectedPass);

    const organizeChartData = () => {
        const levelData = {"novice": 0, "moyen": 0, "pro": 0 };
        const seasonData = {"printemps": 0, "été": 0, "automne": 0, "hiver": 0 };
        const ageGroupData = { "24 ans et moins": 0, "24 à 28 ans": 0, "29 ans et plus": 0 };

        filteredData.forEach(({ niveau, saison, age }) => {
            // Levels data:
            levelData[niveau] = (levelData[niveau] || 0) + 1;

            // Seasons data:
            seasonData[saison] = (seasonData[saison] || 0) + 1;
            
            // Age groups data:
            if (age < 24) {
                ageGroupData["24 ans et moins"] += 1;
            } else if (age >= 24 && age <= 28) {
                ageGroupData["24 à 28 ans"] += 1;
            } else {
                ageGroupData["29 ans et plus"] += 1;
            }
        });
        return { levelData, seasonData, ageGroupData}
    }

    const { levelData, seasonData, ageGroupData } = organizeChartData();

    const generateChartOptions = (xAxisTitle) => ({
        responsive: true,
        plugins: {
            legend: { position: "top" }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: xAxisTitle,
                },
            }
        },
        onClick: (_, elements) => {
            if (xAxisTitle === 'Groupes d\'Âge' || elements.length === 0) {
                return;
            }
            
            const orderedLabels = { 
                levels: ["novice", "moyen", "pro"], 
                seasons: ["printemps", "été", "automne", "hiver"] 
            };

            const clickedElementIndex = elements[0].index;
    
            if (xAxisTitle === 'Saisons' && selectedSeason !== orderedLabels.seasons[clickedElementIndex]) {
                onSeasonChange(orderedLabels.seasons[clickedElementIndex]);
            } 
            else if (xAxisTitle === 'Niveaux' && selectedLevel !== orderedLabels.levels[clickedElementIndex]) {
                onLevelChange(orderedLabels.levels[clickedElementIndex]);
            } 
            else {
                onSeasonChange('');
                onLevelChange('');
            }   
        },
    });

    return (
        <div>
            <h2>Statistiques</h2>
            {filteredData.length > 0 ? (
                <div className={styles.barChartsContainer}>
                        <div className={styles.chart}>
                            <h3>Quantité par Niveau</h3>
                            <Bar data={{
                                    labels: Object.keys(levelData),
                                    datasets: [{
                                        label: 'Quantité',
                                        data: Object.values(levelData),
                                        backgroundColor: 'rgba(75,192,192,0.2)',
                                        borderColor: 'rgba(75,192,192,1)',
                                        borderWidth: 1,
                                    }],
                                }}
                                options={generateChartOptions('Niveaux')}
                            />
                        </div>
                    <div className={styles.chart}>
                        <h3>Quantité par Saison</h3>
                        <Bar data={{
                                labels: Object.keys(seasonData),
                                datasets: [{
                                    label: 'Quantité',
                                    data: Object.values(seasonData),
                                    backgroundColor: 'rgba(255,99,132,0.2)',
                                    borderColor: 'rgba(255,99,132,1)',
                                    borderWidth: 1,
                                }],
                            }}
                            options={generateChartOptions('Saisons')}
                        />
                    </div>
                    <div className={styles.chart}>
                        <h3>Quantité par Groupe d'Âge</h3>
                        <Bar data={{
                                labels: Object.keys(ageGroupData),
                                datasets: [{
                                    label: 'Quantité',
                                    data: Object.values(ageGroupData),
                                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                                    borderColor: 'rgba(153, 102, 255, 1)',
                                    borderWidth: 1,
                                }]
                            }}
                            options={generateChartOptions('Groupes d\'Âge')}
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