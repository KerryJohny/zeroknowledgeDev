// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders zero-knowledge title', () => {
    render(<App />);
    const titleElement = screen.getByText(/zero-knowledge/i);
    expect(titleElement).toBeInTheDocument();
});
