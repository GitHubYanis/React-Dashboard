import React from 'react';
import styles from './Filters.module.css';

const seasons = [
    { value: '', label: '' },
    { value: 'printemps', label: 'Printemps' },
    { value: 'été', label: 'Été' },
    { value: 'automne', label: 'Automne' },
    { value: 'hiver', label: 'Hiver' },
];

const levels = [
    { value: '', label: '' },
    { value: 'novice', label: 'Novice' },
    { value: 'moyen', label: 'Moyen' },
    { value: 'pro', label: 'Professionnel' },
];

const passes = [
    { value: '', label: '' },
    { value: 'simple', label: 'Simple' },
    { value: 'double', label: 'Double' },
    { value: 'illimité', label: 'Illimité' },
];

const Filters = ({ selectedSeason, selectedLevel, selectedPass, onSeasonChange, onLevelChange, onPassChange }) => {

  const createDropdown = (options, className, onChange, selectedValue) => (
    <select className={className} onChange={(e) => onChange(e.target.value)} value={selectedValue}>
      {options.map((option) => (
        <option value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );

  return (
    <div className={styles.filtersComponent}>
        <div className={styles.dropdownContainer}>
            <div>
                <p>Selectionnez une saison:</p>
                {createDropdown(seasons, styles['dropdown-seasons'], onSeasonChange, selectedSeason)}
            </div>
            <div>
                <p>Selectionnez un niveau:</p>
                {createDropdown(levels, styles['dropdown-levels'], onLevelChange, selectedLevel)}
            </div>
            <div>
                <p>Selectionnez un pass:</p>
                {createDropdown(passes, styles['dropdown-passes'], onPassChange, selectedPass)}
            </div>
        </div>
    </div> 
  );
};

export default Filters;