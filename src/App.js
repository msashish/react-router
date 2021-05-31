import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import ListAssignment from './components/ListAssignment';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2 className="App-header">
        React Router App
      </h2>
      <Router>
        <div>
          <nav className="App-link">
              <h3><Link to={'/'} className="nav-link"> Home </Link></h3>
              <h3><Link to={'/contact'} className="nav-link">Contact</Link></h3>
              <h3><Link to={'/about'} className="nav-link">About</Link></h3>
              <h3><Link to={'/list'} className="nav-link">List Assignment</Link></h3>
            
          </nav>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/contact' component={Contact} />
            <Route path='/about' component={About} />
            <Route path='/list' component={ListAssignment} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
