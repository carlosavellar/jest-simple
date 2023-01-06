import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react library/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('First Jest test', () => {
//   render(<App />);
//   const title = screen.getByText(/Sol de Cristal/i);
//   expect(title).toBeInTheDocument();
// });

test('Testing button background.', () => {
  render(<App />);
  const output = screen.getByRole('button', { name: /Change color/i });
  expect(output).toHaveStyle({ backgroundColor: 'red' });
});
