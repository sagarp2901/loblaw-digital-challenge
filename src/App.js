import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Recipes from './components/Recipies/Recipies';
import RecipeDetail from './components/RecipeDetail/RecipeDetail';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path="/recipe-detail">
          <RecipeDetail />
        </Route>
        <Route exact path="/">
          <Recipes />
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
