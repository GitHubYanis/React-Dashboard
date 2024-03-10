import { useMemo } from 'react';
import data from '../data/database.json';

const useFilteredData = (selectedSeason, selectedLevel, selectedPass) => {
    const filteredData = useMemo(() => {
        return data.filter(entry => (
            (!selectedSeason || entry.saison === selectedSeason) &&
            (!selectedLevel || entry.niveau === selectedLevel) &&
            (!selectedPass || entry.passe === selectedPass)
        ));
    }, [selectedSeason, selectedLevel, selectedPass]);

    return filteredData;
};

export default useFilteredData;