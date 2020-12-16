import React, {useEffect, useState} from 'react';
// import PropTypes from 'prop-types';
import './RecipeDetail.scss';
import {useLocation} from 'react-router-dom';
import {getRecipeById} from '../../services/RecipesService';
import ReactPlayer from "react-player";
import { FaArrowLeft } from 'react-icons/fa';

const RecipeDetail = () => {
  const location = useLocation();
  const [mealDetail, setMealDetail] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);

  useEffect(() => {
      getRecipeById(location.state.detailId).then(res => {
        setMealDetail(res.meals[0]);
        // Format ingredients and instructions into array
        formatIngredients(res.meals[0]);
        formatInstructions(res.meals[0]);
      }).catch(err=> {
        console.log(err);
      });
  }, [location]);

  const formatIngredients = (meal) => {
    const ingredients = [];
    for(let i = 1; i <= 20; i++) {
      ingredients.push({ingredient: meal[`strIngredient${i}`], measure: meal[`strMeasure${i}`]});
    }
    setIngredients(ingredients);
  }

  const formatInstructions = (meal) => {
    const instructions = meal.strInstructions.split('.');
    setInstructions(instructions);
  }

  return (
  <div className="RecipeDetail" data-testid="RecipeDetail">
    <div className="back-container"><a className="back" href="/"><FaArrowLeft className="back-icon" />Back</a></div>
    {mealDetail && <div className="detail-container">
        <h2>{mealDetail.strMeal}</h2>
        <div><img src={mealDetail.strMealThumb} alt="thumb-meal"/></div>
        {mealDetail.strSource && <a target="new" href={mealDetail.strSource}>Take me to the Article</a>}
        <div className="text-container">
          <div className="ingredients-container">
            {ingredients && <ul>
              <h4>Ingredients</h4>
              {ingredients.map((item, index)=> (
                item.ingredient && <li key={index}>{item.measure} {item.ingredient}.</li>
              ))}
              </ul>}
          </div>
          <div className="instructions">
            {instructions && <ul>
              <h4>Instructions</h4>
              {instructions.map((instruction, index)=> (
                instruction && <li key={index}>{instruction}.</li>
              ))}
            </ul>}
          </div>
        </div>
        {/* Youtube container for Video */}
        <div className="youtube-container">
          {mealDetail.strYoutube && <ReactPlayer url={mealDetail.strYoutube}/>}
        </div>
      </div>}
  </div>
)};

RecipeDetail.propTypes = {};

RecipeDetail.defaultProps = {};

export default RecipeDetail;
