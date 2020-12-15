import React, {useEffect, useState} from 'react';
import './Recipies.scss';
import {getAllCategories, getAllRecipesInCategory} from '../../services/RecipesService';
import {useHistory, Link} from 'react-router-dom';
import Meals from '../Meals/Meals';

const Recipies = () => {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('');
  const [meals, setMeals] = useState([]);

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
      setMeals(res.meals);
    }).catch(err=> {
      console.log(err);
    });
  }

  const showCurrentCategoryMeals = () => {

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
              <div className="recipe-btn" onClick={() => getAllItemsInCategory(category)}>Checkout Recipes</div>
            </div>
          </div>
          {currentCategory === category.strCategory? <Meals meals={meals}/> : null}
        </div>
      ))}
    </div>
  )};

Recipies.propTypes = {};

Recipies.defaultProps = {};

export default Recipies;
