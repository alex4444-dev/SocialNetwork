import { render, screen } from '@testing-library/react';
import SamuraiJSApp from './App';
import React from "react";

test('renders learn react link', () => {
  render(<SamuraiJSApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
