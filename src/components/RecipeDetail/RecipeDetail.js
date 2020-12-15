import React, {useEffect, useState} from 'react';
// import PropTypes from 'prop-types';
import './RecipeDetail.scss';
import {useLocation} from 'react-router-dom';
import {getRecipeById} from '../../services/RecipesService';

const RecipeDetail = () => {
  const location = useLocation();
  const [mealDetail, setMealDetail] = useState(null);
  useEffect(() => {
    if(location.state) {
      getRecipeById(location.state.detailId).then(res => {
        console.log('Meal Details', res);
        setMealDetail(res.meals[0]);
      }).catch(err=> {
        console.log(err);
      });
    }
  }, []);

  return (
  <div className="RecipeDetail" data-testid="RecipeDetail">
    {mealDetail && <div className="detail-container">
      <h2>{mealDetail.strMeal}</h2>
      
      <img src={mealDetail.strMealThumb}/>
      </div>}
  </div>
)};

RecipeDetail.propTypes = {};

RecipeDetail.defaultProps = {};

export default RecipeDetail;
