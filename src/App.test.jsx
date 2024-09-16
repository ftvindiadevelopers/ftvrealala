import '@testing-library/jest-dom/';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Cta from './components/Cta';

test('renders the landing page', () => {
  render(
    <Router>
      <Cta />
    </Router>
  );
  expect(screen.getByRole('heading')).toHaveTextContent(/Together, we lay the foundation for perpetual luxury/);
}); 