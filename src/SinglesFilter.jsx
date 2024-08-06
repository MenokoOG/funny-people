import React from 'react';
import { people } from './peopleData';
import { useFilter } from './hooks/useFilter';
import { useFilteredPeople } from './hooks/useFilteredPeople';
import { useSpring, animated } from '@react-spring/web';

const SinglesFilter = () => {
  const [filters, updateFilter] = useFilter();
  const filteredPeople = useFilteredPeople(people, filters);

  const springProps = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Singles Filter</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {/* Filter controls */}
        <div>
          <label className="block text-sm font-medium">Age Range</label>
          <input
            type="range"
            min="0"
            max="100"
            value={filters.ageRange[1]}
            onChange={(e) => updateFilter('ageRange', [filters.ageRange[0], +e.target.value])}
            className="w-full"
          />
          <span>{filters.ageRange[0]} - {filters.ageRange[1]}</span>
        </div>
        <div>
          <label className="block text-sm font-medium">Favorite Food</label>
          <input
            type="text"
            value={filters.favoriteFood}
            onChange={(e) => updateFilter('favoriteFood', e.target.value)}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Zodiac Sign</label>
          <input
            type="text"
            value={filters.zodiacSign}
            onChange={(e) => updateFilter('zodiacSign', e.target.value)}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Gender</label>
          <select
            value={filters.gender}
            onChange={(e) => updateFilter('gender', e.target.value)}
            className="w-full"
          >
            <option value="">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Non-binary">Non-binary</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Height Range</label>
          <input
            type="range"
            min="0"
            max="250"
            value={filters.heightRange[1]}
            onChange={(e) => updateFilter('heightRange', [filters.heightRange[0], +e.target.value])}
            className="w-full"
          />
          <span>{filters.heightRange[0]} - {filters.heightRange[1]} cm</span>
        </div>
        <div>
          <label className="block text-sm font-medium">Hobby</label>
          <input
            type="text"
            value={filters.hobby}
            onChange={(e) => updateFilter('hobby', e.target.value)}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Multiple Hobbies (comma separated)</label>
          <input
            type="text"
            value={filters.multipleHobbies.join(', ')}
            onChange={(e) => updateFilter('multipleHobbies', e.target.value.split(', ').map(hobby => hobby.trim()))}
            className="w-full"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPeople.map((person, index) => (
          <animated.div key={index} style={springProps} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold">{person.name}</h2>
            <p>Age: {person.age}</p>
            <p>Height: {person.height} cm</p>
            <p>Gender: {person.gender || 'Non-binary'}</p>
            <p>Sign: {person.sign}</p>
            <p>Favorite Food: {person.favoriteFood}</p>
            <p>Hobbies: {person.hobbies.join(', ')}</p>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default SinglesFilter;
