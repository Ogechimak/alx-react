import React from 'react';
import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications component tests', () => {
  it('renders without crashing', () => {
    render(<Notifications />);
    expect(screen.getByText(/Here is the list of notifications/i)).toBeInTheDocument();
  });

  it('renders three list items', () => {
    render(<Notifications />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
  });

  it('renders the text "Here is the list of notifications"', () => {
    render(<Notifications />);
    expect(screen.getByText('Here is the list of notifications')).toBeInTheDocument();
  });

  // New test
  it('renders the correct text for each list item', () => {
    render(<Notifications />);
    expect(screen.getByText(/New course available/i)).toBeInTheDocument();
    expect(screen.getByText(/New resume available/i)).toBeInTheDocument();
    expect(screen.getByText(/Urgent requirement/i)).toBeInTheDocument();
  });
});