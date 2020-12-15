import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Recipies from './Recipies';

describe('<Recipies />', () => {
  test('it should mount', () => {
    render(<Recipies />);
    
    const recipies = screen.getByTestId('Recipies');

    expect(recipies).toBeInTheDocument();
  });
});