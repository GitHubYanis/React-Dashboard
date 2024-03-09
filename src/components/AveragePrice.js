import React from 'react';
import styles from './AveragePrice.module.css';

const AveragePrice = () => {
    const averagePrice = 90;

    return (
        <div className={styles.averagePriceContainer}>
            <h2>Prix Moyen</h2>
            {averagePrice > 0 ? (
            <p>Le prix moyen est: {averagePrice}$</p>
            ) : ( <p></p> )}
        </div>
    ); 
};
export default AveragePrice;