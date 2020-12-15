import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RecipeDetail from './RecipeDetail';

describe('<RecipeDetail />', () => {
  test('it should mount', () => {
    render(<RecipeDetail />);
    
    const recipeDetail = screen.getByTestId('RecipeDetail');

    expect(recipeDetail).toBeInTheDocument();
  });
});