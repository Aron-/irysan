import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AsteroidModal from './AsteroidModal';
import '@testing-library/jest-dom';

// Sample asteroid data for testing
const asteroid = {
  id: '1',
  name: '211871 (2004 HO)',
  close_approach_date: '2024-10-16',
  diameter: 1.004708274,
};

describe('AsteroidModal Component', () => {
  it('renders the modal with asteroid details', () => {
    render(<AsteroidModal asteroid={asteroid} onClose={jest.fn()} />);

    // Check if the modal content is displayed correctly
    expect(screen.getByText('Asteroid Details')).toBeInTheDocument();
    expect(screen.getByText('211871 (2004 HO)')).toBeInTheDocument();
    expect(screen.getByText('2024-10-16')).toBeInTheDocument();
    expect(screen.getByText('1.00 km')).toBeInTheDocument();
  });

  it('calls onClose when the close button is clicked', () => {
    const onClose = jest.fn();
    render(<AsteroidModal asteroid={asteroid} onClose={onClose} />);

    // Simulate clicking the close button
    const closeButton = screen.getByText('Close');
    fireEvent.click(closeButton);

    // Check if onClose was called
    expect(onClose).toHaveBeenCalled();
  });
});
