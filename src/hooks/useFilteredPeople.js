import { useMemo } from 'react';

export const useFilteredPeople = (people, filters) => {
  return useMemo(() => {
    return people.filter(person => {
      return (
        person.age >= filters.ageRange[0] && person.age <= filters.ageRange[1] &&
        (filters.favoriteFood ? person.favoriteFood.toLowerCase().includes(filters.favoriteFood.toLowerCase()) : true) &&
        (filters.zodiacSign ? person.sign.toLowerCase().includes(filters.zodiacSign.toLowerCase()) : true) &&
        (filters.gender ? person.gender === filters.gender : true) &&
        person.height >= filters.heightRange[0] && person.height <= filters.heightRange[1] &&
        (filters.hobby ? person.hobbies.some(hobby => hobby.toLowerCase().includes(filters.hobby.toLowerCase())) : true) &&
        (filters.multipleHobbies.length ? filters.multipleHobbies.every(hobby => person.hobbies.includes(hobby)) : true)
      );
    });
  }, [people, filters]);
};
