import React from 'react';
import ReactDOM from 'react-dom';
import pizzas from '../data/pizzas.json';
import Pizza from './Pizza';
import AppCSS from './App.module.css';
import Cart from './Cart';
import AppStateProvider from './AppState';
import SpecialOffer from './SpecialOffer';

const App = () =>{
  const specialOfferPizza = pizzas.find(pizza => pizza.specialOffer);
  return (
    <AppStateProvider>
      <div className={AppCSS.container}>
        <h1 className={AppCSS.siteTitle}> Delicious Pizza</h1>
        <Cart />
        {specialOfferPizza && <SpecialOffer pizza={specialOfferPizza} />}
        <ul className={AppCSS.pizzaList}>
          {pizzas.map( (pizza) => <Pizza pizza={pizza}/>)}
        </ul>
      </div>
    </AppStateProvider>
  )
}

export default App;
