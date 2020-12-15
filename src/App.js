import './App.css';
import Recipes from './components/Recipies/Recipies';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Meals from './components/Meals/Meals';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path="/meals">
          <Meals />
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
