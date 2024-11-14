import { useState } from 'react';

export default function SearchForm({ onSearch }) {
  const [destination, setDestination] = useState('');
  const [occupancy, setOccupancy] = useState('');
  const [priceRange, setPriceRange] = useState([3000, 4500]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(destination, occupancy, priceRange);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        placeholder="Destination"
      />
      <input
        type="number"
        value={occupancy}
        onChange={(e) => setOccupancy(e.target.value)}
        placeholder="Occupancy"
      />
      <input
        type="range"
        min="0"
        max="10000"
        value={priceRange[0]}
        onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
      />
      <input
        type="range"
        min="0"
        max="10000"
        value={priceRange[1]}
        onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
      />
      <button type="submit">Search</button>
    </form>
  );
}
