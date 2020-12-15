import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Meals from './Meals';

describe('<Meals />', () => {
  test('it should mount', () => {
    render(<Meals />);
    
    const meals = screen.getByTestId('Meals');

    expect(meals).toBeInTheDocument();
  });
});