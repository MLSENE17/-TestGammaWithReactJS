import { render, screen } from '@testing-library/react';
import App from './App';
import Stage1 from './components/Stage1/Stage1';

test('FizzBUzz', () => {
  render(<App />);
  const linkElement = screen.getByText(/Stage 1/i);
  expect(linkElement).toBeInTheDocument();
});