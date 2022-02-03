import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Filter Goblins', () => {
  render(<App />);
  const linkElement = screen.getByText(/Filter Goblins/i);
  expect(linkElement).toBeInTheDocument();
});
