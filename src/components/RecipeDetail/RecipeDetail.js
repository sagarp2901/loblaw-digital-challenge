import React, {useEffect, useState} from 'react';
// import PropTypes from 'prop-types';
import './RecipeDetail.scss';
import {useLocation} from 'react-router-dom';
import {getRecipeById} from '../../services/RecipesService';
import ReactPlayer from "react-player";

const RecipeDetail = () => {
  const location = useLocation();
  const [mealDetail, setMealDetail] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [youtubeUrl, setYoutubeUrl] = useState("");
  useEffect(() => {
    if(location.state) {
      getRecipeById(location.state.detailId).then(res => {
        console.log('Meal Details', res.meals[0]);
        setMealDetail(res.meals[0]);
        formatIngredients(res.meals[0]);
        formatInstructions(res.meals[0]);
      }).catch(err=> {
        console.log(err);
      });
    }
  }, []);

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
    console.log(instructions);
  }

  

  return (
  <div className="RecipeDetail" data-testid="RecipeDetail">
    {mealDetail && <div className="detail-container">
        <h2>{mealDetail.strMeal}</h2>
        <img src={mealDetail.strMealThumb}/>
        <h4>Ingredients</h4>
        <div className="ingredients-container">
          {ingredients && <ul>
            {ingredients.map((item, index)=> (
              item.ingredient && <li key={index}>{item.measure} {item.ingredient}</li>
            ))}
            </ul>}
        </div>
        <h4>Instructions</h4>
        <div>
          <ul>
          {instructions.map((instruction, index)=> (
            instruction && <li key={index}>{instruction}.</li>
          ))}
          </ul>
        </div><div>
        {mealDetail.strYoutube && <ReactPlayer url={mealDetail.strYoutube}/>}
        </div>
      </div>}
  </div>
)};

RecipeDetail.propTypes = {};

RecipeDetail.defaultProps = {};

export default RecipeDetail;
