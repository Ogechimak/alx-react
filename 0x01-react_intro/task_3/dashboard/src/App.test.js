import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders login message', () => {
  render(<App />);
  const loginElement = screen.getByText(/Login to access the full dashboard/i);
  expect(loginElement).toBeInTheDocument();
});