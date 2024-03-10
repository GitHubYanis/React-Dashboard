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
        <div>
            <h2>Prix Moyen</h2>
            <div className={styles.averagePriceContainer}>
                {filteredData.length > 0 ? (
                    <p className={styles.averagePrice}> Le prix moyen est: 
                        <p className={styles.priceText}> 
                            {averagePrice.toFixed(2)}$
                        </p>
                    </p>
                ) : (
                    <p className={styles.priceText}>
                        Aucunes données...
                    </p>
                )}
            </div>
        </div>
    ); 
};

export default AveragePrice;