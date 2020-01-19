import React, { Component } from 'react';
import {Switch, Router, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar  from './components/Navbar';
import Home  from './components/Home';
import Contact  from './components/Contact';
import ProductList  from './components/ProductList';
import Details  from './components/Details';
import Cart  from './components/Cart';
import Default  from './components/Default';
import Modal from './components/Modal';
import Footer from "./components/Landing/footer";


class App extends Component {
  render() {
  return (
<React.Fragment>
  
  <Navbar />
  <Switch>
    <Route exact path="/produse" component={ProductList} />
    <Route path="/details" component={Details} />
    <Route path="/cart" component={Cart} />
    <Route path="/contact" component={Contact} />
    <Route path="/" component={Home} />
    <Route component={Default} />
  </Switch>
  <Modal />
  <Footer />
</React.Fragment>
  );
}
}

export default App;
