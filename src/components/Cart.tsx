import React, { Component } from 'react';
import CartCSS from './Cart.module.css';
import { FiShoppingCart } from 'react-icons/fi';
import { AppStateContext } from './AppState';

interface Props {

}

interface State {
  isOpen: boolean;
}

class Cart extends Component<Props,State> {
  constructor(public props: Props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event: React.MouseEvent<HTMLButtonElement,MouseEvent>): void {
    console.log(event.target);
    if((event.target as HTMLElement).nodeName === 'SPAN'){
      console.log((event.target as HTMLSpanElement));
    }
    this.setState((prevState)=>(
      {
      isOpen: !prevState.isOpen
    }));
  }
  // handleClick = (event: React.MouseEvent<HTMLButtonElement,MouseEvent>) => {
  //   this.setState((prevState) => (
  //     {
  //       isOpen: !prevState.isOpen
  //     }
  //   ));
  // }
  render(){
    return (
      <AppStateContext.Consumer>
        {(state) => {
          const itemCount: number = state.cart.items.reduce((accumulator,currentValue)=>{
            return accumulator + currentValue.quantity;
          },0);
          return(
          <div className={CartCSS.cartContainer}>
            <button 
              type="button" 
              className={CartCSS.button}
              onClick={this.handleClick }>
                <FiShoppingCart />
                <span>{itemCount} Pizzas</span>
            </button>
    
            <div 
              className={CartCSS.cartDropDown}
              style={{
                display: this.state.isOpen? 'block': 'none',
              }}>
              <ul>
                {state.cart.items.map(item =>{
                  return (
                    <li key={item.id}>{item.name} &times; {item.quantity}</li>
                  )
                })}
              </ul>
            </div>
          </div>)
          } }
      </AppStateContext.Consumer>
      
    );
  }
   
}

export default Cart;