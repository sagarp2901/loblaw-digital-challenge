import React, {useState} from 'react';
// import PropTypes from 'prop-types';
import './Meals.scss';
import {getAllRecipesInCategory} from '../../services/RecipesService';
import {useHistory} from 'react-router-dom';
import { Accordion, Card, Button } from 'react-bootstrap'
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Meals = ({category}) => {
  const history = useHistory();
  const [meals, setMeals] = useState([]);
  const [isOpen, setOpen] = useState(false);

  const getRecipes = () => {
    setOpen(!isOpen);
    // Make call only once to fetch the data
    if(meals.length) return;
    // Fetch all recipes in a category when accordian is expanded
    getAllRecipesInCategory(category).then(res => {
      setMeals(res.meals);
    }).catch(err => {
      console.log(err);
    });
  }

  const goToDetail = (meal) => {
    // Navigate to recipe detail component
    history.push('recipe-detail', {detailId: meal.idMeal});
  }

  const clickOnDetail = (event, meal) => {
    if(event.keyCode !== 13) return;
    goToDetail(meal);
  }

  return (
    <div className="Meals" data-testid="Meals">
       <Card>
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0" onClick={getRecipes}>
            <Button variant="light" className="toggle-recipe-btn" onClick={getRecipes}>
            {isOpen? <FaChevronDown className="chevron"/>: <FaChevronRight className="chevron"/>}Checkout {category} Recipes
            </Button>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              {meals && meals.map((meal, index)=> (
                <div key={index} className="meal-container" tabIndex="0" onKeyUp={($event) => clickOnDetail($event, meal)} onClick={() => goToDetail(meal)}>
                  <img src={meal.strMealThumb} alt="thumb-meal"/>
                  <div>{meal.strMeal}</div>
                </div>
              ))}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      </Card>
    </div>
)};

Meals.propTypes = {};

Meals.defaultProps = {};

export default Meals;
