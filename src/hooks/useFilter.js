import { useState } from 'react';

export const useFilter = () => {
  const [filters, setFilters] = useState({
    ageRange: [0, 100],
    favoriteFood: '',
    zodiacSign: '',
    gender: '',
    heightRange: [0, 250],
    hobby: '',
    multipleHobbies: [],
  });

  const updateFilter = (filterName, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  return [filters, updateFilter];
};
