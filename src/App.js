import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/home';
import Navbar from './components/navbar';
import Cart from './components/cart';
import SingleItem from './components/singleItem';
import ProductContextProvider from './contexts/productContext';

function App () {
  return (
    <BrowserRouter>
      <section className='app'>
        <ProductContextProvider>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/singleItem" component={SingleItem}/>
          </Switch>
        </ProductContextProvider>
      </section>
    </BrowserRouter>
    
  )
}

export default App;