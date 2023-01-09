import { render, screen, fireEvent } from '@testing-library/react';
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

  const buttonEl = screen.getByRole('button', { name: /Change color/i });
  expect(buttonEl).toHaveStyle({ backgroundColor: 'red' });

  fireEvent.click(buttonEl);

  expect(buttonEl).toHaveStyle({ backgroundColor: 'blue' });

  expect(buttonEl).toHaveTextContent('Change color blue');
});

test('Testing check box', () => {
  render(<App />);

  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('Teste buttlon disabled 🆒', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  const buttonEl = screen.getByRole('button', { name: /Change color/i });

  fireEvent.click(checkbox);
  expect(buttonEl).toBeDisabled();

  fireEvent.click(checkbox);
  expect(buttonEl).toBeEnabled();
});
