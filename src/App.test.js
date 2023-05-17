import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders chatbot when button is clicked', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /bot/i });
  fireEvent.click(buttonElement);
  expect(buttonElement).not.toBeNull();
});

test('does not render chatbot by default', () => {
  render(<App />);
  const chatbotElement = screen.queryByRole('button', { name: /user input/i });
  expect(chatbotElement).toBeNull();
});

test('hides chatbot when button is clicked again', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /bot/i });
  fireEvent.click(buttonElement);
  fireEvent.click(buttonElement);
  expect(buttonElement).not.toBeNull();
});

test('prevents empty user input', () => {
  const validator = jest.fn();
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /bot/i });
  fireEvent.click(buttonElement);
  const userInput = screen.getByPlaceholderText('Write your message here');
  fireEvent.change(userInput, { target: { value: '   ' }});
  fireEvent.submit(userInput);
  expect(validator).toBeTruthy();
});