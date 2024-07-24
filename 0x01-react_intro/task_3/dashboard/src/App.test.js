import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component tests', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText(/School dashboard/i)).toBeInTheDocument();
  });

  it('renders a div with the class App-header', () => {
    const { container } = render(<App />);
    expect(container.querySelector('.App-header')).toBeInTheDocument();
  });

  it('renders a div with the class App-body', () => {
    const { container } = render(<App />);
    expect(container.querySelector('.App-body')).toBeInTheDocument();
  });

  it('renders a div with the class App-footer', () => {
    const { container } = render(<App />);
    expect(container.querySelector('.App-footer')).toBeInTheDocument();
  });

  // New test
  it('renders login form', () => {
    render(<App />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /ok/i })).toBeInTheDocument();
  });
});