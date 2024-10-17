import React, { useEffect, useState } from 'react';
import AsteroidModal from './AsteroidModal';

interface Asteroid {
  id: string;
  name: string;
  close_approach_date: string;
  diameter: number;
}

interface AsteroidListProps {
  asteroids: Asteroid[];
}

const AsteroidList: React.FC<AsteroidListProps> = ({ asteroids }) => {
  const [sortedAsteroids, setSortedAsteroids] = useState<Asteroid[]>([]);
  const [selectedAsteroid, setSelectedAsteroid] = useState<Asteroid | null>(null);

  // Sort asteroids by name when the component is mounted or asteroids prop changes
  useEffect(() => {
    const sorted = [...asteroids].sort((a, b) => a.name.localeCompare(b.name));
    setSortedAsteroids(sorted);
  }, [asteroids]);

  const handleRowClick = (asteroid: Asteroid) => {
    setSelectedAsteroid(asteroid);
  };

  const closeModal = () => {
    setSelectedAsteroid(null);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Close Approach Date</th>
            <th>Diameter (km)</th>
          </tr>
        </thead>
        <tbody>
          {sortedAsteroids.length === 0 ? (
            <tr>
              <td colSpan={3}>No asteroids found for the selected date range.</td>
            </tr>
          ) : (
            sortedAsteroids.map((asteroid) => (
              <tr key={asteroid.id} onClick={() => handleRowClick(asteroid)}>
                <td>{asteroid.name}</td>
                <td>{asteroid.close_approach_date}</td>
                <td>{asteroid.diameter.toFixed(2)}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {selectedAsteroid && (
        <AsteroidModal asteroid={selectedAsteroid} onClose={closeModal} />
      )}
    </div>
  );
};

export default AsteroidList;
