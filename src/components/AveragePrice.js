import React from 'react';
import styles from './AveragePrice.module.css';
import useFilteredData from '../hooks/useFilteredData';

const AveragePrice = ({ selectedSeason, selectedLevel, selectedPass }) => {
    const filteredData = useFilteredData(selectedSeason, selectedLevel, selectedPass);

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
            {filteredData.length > 0 ? (
                <p>Le prix moyen est: {averagePrice.toFixed(2)}$</p>
            ) : (
                <p>Aucunes données...</p>
            )}
        </div>
    ); 
};

export default AveragePrice;