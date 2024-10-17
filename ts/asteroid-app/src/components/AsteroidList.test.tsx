import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AsteroidList from './AsteroidList';
import '@testing-library/jest-dom';

// Sample asteroid data for testing
const asteroids = [
  {
    id: '1',
    name: '211871 (2004 HO)',
    close_approach_date: '2024-10-16',
    diameter: 1.004708274,
  },
  {
    id: '2',
    name: '441987 (2010 NY65)',
    close_approach_date: '2024-10-18',
    diameter: 0.24,
  },
];

describe('AsteroidList Component', () => {
  it('renders a list of asteroids in a table', () => {
    render(<AsteroidList asteroids={asteroids} />);

    // Check if the asteroid names are displayed in the table
    expect(screen.getByText('211871 (2004 HO)')).toBeInTheDocument();
    expect(screen.getByText('441987 (2010 NY65)')).toBeInTheDocument();
  });

  it('opens a modal when an asteroid row is clicked and displays details', () => {
    render(<AsteroidList asteroids={asteroids} />);

    // Find the first asteroid row and click on it
    const asteroidRow = screen.getByText('211871 (2004 HO)');
    fireEvent.click(asteroidRow);

    // Check if the modal is displayed with the correct asteroid details
    expect(screen.getByText('Asteroid Details')).toBeInTheDocument();
    expect(screen.getAllByText('211871 (2004 HO)')[1]).toBeInTheDocument();
    expect(screen.getAllByText('2024-10-16')[1]).toBeInTheDocument();
    expect(screen.getByText('1.00 km')).toBeInTheDocument();
  });

  it('closes the modal when the close button is clicked', () => {
    render(<AsteroidList asteroids={asteroids} />);

    // Open the modal
    const asteroidRow = screen.getByText('211871 (2004 HO)');
    fireEvent.click(asteroidRow);

    // Check if the modal is displayed
    expect(screen.getByText('Asteroid Details')).toBeInTheDocument();

    // Click on the close button
    const closeButton = screen.getByText('Close');
    fireEvent.click(closeButton);

    // Check if the modal is closed
    expect(screen.queryByText('Asteroid Details')).not.toBeInTheDocument();
  });
});
