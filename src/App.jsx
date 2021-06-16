import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
// import Posts from './components/Posts'
import Post from './components/Post'
import Clock from './components/Clock';

function App() {
 
  return (
    <Router>
      <Route exact path='/' component={Home} />
      <Clock />
      <Switch>
        <Route path='/post/:id' component={Post}/>
        <Route path='/clock' component={Clock} />
      </Switch>
    </Router>

  );
}

export default App;
