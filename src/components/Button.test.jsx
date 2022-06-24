import { render, screen } from '@testing-library/react';
import Button from './Button';

test('should have title', () => {
  render(<Button title="sample" onClick={() => {}} />);
  expect(screen.getByText(/sample/i)).toBeInTheDocument();
});
