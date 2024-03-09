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
        <div>
            <p>Selectionnez une saison:
                {createDropdown(seasons, styles['dropdown-seasons'], onSeasonChange, selectedSeason)}
            </p>
        </div>
        <div>
            <p>Selectionnez un niveau:
                {createDropdown(levels, styles['dropdown-levels'], onLevelChange, selectedLevel)}
            </p>
        </div>
        <div>
            <p>Selectionnez un pass:
                {createDropdown(passes, styles['dropdown-passes'], onPassChange, selectedPass)}
            </p>
        </div>
    </div>
  );
};

export default Filters;