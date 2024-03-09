import React from 'react';
import styles from './Filters.module.css';

const Filters = () => {
  const seasons = [
    { value: '', label: '' },
    { value: 'spring', label: 'Printemps' },
    { value: 'summer', label: 'Été' },
    { value: 'autumn', label: 'Automne' },
    { value: 'winter', label: 'Hiver' },
  ];

  const levels = [
    { value: '', label: '' },
    { value: 'novice', label: 'Novice' },
    { value: 'medium', label: 'Moyen' },
    { value: 'professional', label: 'Professionnel' },
  ];

  const passes = [
    { value: '', label: '' },
    { value: 'simple', label: 'Simple' },
    { value: 'double', label: 'Double' },
    { value: 'unlimited', label: 'Illimité' },
  ];

  const createDropdown = (options, className) => (
    <select className={className}>
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
                {createDropdown(seasons, styles['dropdown-seasons'])}
            </p>
        </div>
        <div>
            <p>Selectionnez un niveau:
                {createDropdown(levels, styles['dropdown-levels'])}
            </p>
        </div>
        <div>
            <p>Selectionnez un pass:
                {createDropdown(passes, styles['dropdown-passes'])}
            </p>
        </div>
    </div>
  );
};

export default Filters;