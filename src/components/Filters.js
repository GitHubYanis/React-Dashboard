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
    { value: 'beginner', label: 'Débutant' },
    { value: 'intermediate', label: 'Intermédiaire' },
    { value: 'advanced', label: 'Avancé' },
  ];

  const passes = [
    { value: '', label: '' },
    { value: 'passA', label: 'Pass A' },
    { value: 'passB', label: 'Pass B' },
    { value: 'passC', label: 'Pass C' },
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