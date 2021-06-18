import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import Error from './components/Error';

function App() {
 
  return (
     <Router>
     <Header />
     <Route exact path='/' component={Products}/>
     <Switch>
     <Route path='/product/:productId' component={ProductDetail}/>
     <Route path='/error' component={Error}/>
     </Switch>
     </Router>
  );
}

export default App;
