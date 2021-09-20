import QuizState from './context/QuizConext/QuizState';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeComponent from './HomeComponent/HomeComponent';
import QuizComponent from './QuizComponent/QuizComponent';
import NavBarComponent from './NavBarComponent/NavBarComponent';
import './App.css';
function App() {
  return (
    <QuizState>
      <Router>
        <Switch>
          <div className='App'>
            <NavBarComponent />
            <Route exact path='/' component={HomeComponent} />
            <Route exact path='/:id' component={QuizComponent} />
          </div>
        </Switch>
      </Router>
    </QuizState>
  );
}

export default App;
