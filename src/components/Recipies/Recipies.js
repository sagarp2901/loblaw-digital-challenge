import React, {useEffect, useState} from 'react';
import './Recipies.scss';
import {getAllCategories, getAllRecipesInCategory} from '../../services/RecipesService';
import Meals from '../Meals/Meals';

const Recipies = () => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('');

  useEffect(() => {
    getAllCategories().then(res => {
      console.log(res);
      setCategories(res.categories);
    }).catch(err=> {
      console.log(err);
    });
  }, []);

  const getAllItemsInCategory = (category) => {
    setCurrentCategory(category.strCategory);
    // history.push('/meals', {category: category.strCategory});
    getAllRecipesInCategory(category.strCategory).then(res => {
      console.log('Items', res);
      //setMeals(res.meals);
    }).catch(err=> {
      console.log(err);
    });
  }

  return (
    <div className="Recipies" data-testid="Recipies">
      <h1>Categories</h1>
      {categories.map((category, index)=> (
        <div key={index} className="category-container">
          <div className="category-discription">
            <img src={category.strCategoryThumb} alt="food-category"/>
            <div className="text-container">
              <h2>{category.strCategory}</h2>
              <p>{category.strCategoryDescription}</p>
            </div>
          </div>
          <Meals category={category.strCategory}/>
        </div>
      ))}
    </div>
  )};

Recipies.propTypes = {};

Recipies.defaultProps = {};

export default Recipies;
