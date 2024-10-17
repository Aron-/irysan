import React, { useState } from 'react';
import AsteroidList from './components/AsteroidList';
import SearchForm from './components/SearchForm';

interface Asteroid {
  id: string;
  name: string;
  close_approach_date: string;
  diameter: number;
}

const App: React.FC = () => {
  const [asteroids, setAsteroids] = useState<Asteroid[]>([]);

  const handleSearch = async (startDate: string, endDate: string) => {
    try {
      const response = await fetch(`http://localhost:3001/asteroids?start_date=${startDate}&end_date=${endDate}`);
      const data = await response.json();
      setAsteroids(data);
    } catch (error) {
      console.error('Error fetching asteroids:', error);
    }
  };

  return (
    <div>
      <h1>Asteroid Information</h1>
      <SearchForm onSearch={handleSearch} />
      <AsteroidList asteroids={asteroids} />
    </div>
  );
};

export default App;
