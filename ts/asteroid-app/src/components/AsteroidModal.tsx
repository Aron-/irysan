import React from 'react';

interface Asteroid {
  id: string;
  name: string;
  close_approach_date: string;
  diameter: number;
}

interface AsteroidModalProps {
  asteroid: Asteroid | null;
  onClose: () => void;
}

const AsteroidModal: React.FC<AsteroidModalProps> = ({ asteroid, onClose }) => {
  if (!asteroid) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Asteroid Details</h2>
        <p><strong>Name:</strong> {asteroid.name}</p>
        <p><strong>Close Approach Date:</strong> {asteroid.close_approach_date}</p>
        <p><strong>Diameter:</strong> {asteroid.diameter.toFixed(2)} km</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AsteroidModal;
