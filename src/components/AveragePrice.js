import React, { useMemo } from 'react';
import styles from './AveragePrice.module.css';
import data from '../data/database.json';

const AveragePrice = ({ selectedSeason, selectedLevel, selectedPass }) => {
    const filteredData = useMemo(() => {
        return data.filter(entry => (
            (!selectedSeason || entry.saison === selectedSeason) &&
            (!selectedLevel || entry.niveau === selectedLevel) &&
            (!selectedPass || entry.passe === selectedPass)
        ));
    }, [selectedSeason, selectedLevel, selectedPass]);

    const calculateAveragePrice = () => {
        const dataLength = filteredData.length;
        if (dataLength === 0) return 0;

        const totalPrices = filteredData.reduce((sum, entry) => sum + entry.prix, 0);
        return totalPrices / dataLength;
    };

    const averagePrice = calculateAveragePrice();

    return (
        <div className={styles.averagePriceContainer}>
            <h2>Prix Moyen</h2>
            {averagePrice > 0 ? (
                <p>Le prix moyen est: {averagePrice.toFixed(2)}$</p>
            ) : ( 
                <p>Aucunes données...</p> 
            )}
        </div>
    ); 
};
export default AveragePrice;