import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './home';
import SingleProduct from './singleproduct';
import Cart from './cart';
import Header from './partial/header';
import './App.css';

function App() {
  return (
    <div>
      <Router>
      <Header />
      
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/product/:id" component={SingleProduct} />
            <Route exact path="/cart" component={Cart} />
        </Switch>
      </Router>
    </div>

  );
}

export default App;
