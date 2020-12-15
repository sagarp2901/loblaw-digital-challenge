import React, {useState, useEffect} from 'react';
// import PropTypes from 'prop-types';
import './Meals.scss';
import {getAllRecipesInCategory} from '../../services/RecipesService';
import {useLocation, useHistory} from 'react-router-dom';

const Meals = ({meals}) => {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if(location.state) {
      getAllRecipesInCategory(location.state.category).then(res => {
        console.log('Items', res);
      }).catch(err=> {
        console.log(err);
      });
    }
  }, []);

  const goToDetail = (meal) => {
    history.push('recipe-detail', {detailId: meal.idMeal});
  }

  return (
    <div className="Meals" data-testid="Meals">
      {meals.map((meal, index)=> (
        <div key={index} className="meal-container" onClick={() => goToDetail(meal)}>
          <img src={meal.strMealThumb}/>
          <div>{meal.strMeal}</div>
        </div>
      ))}
    </div>
)};

Meals.propTypes = {};

Meals.defaultProps = {};

export default Meals;
