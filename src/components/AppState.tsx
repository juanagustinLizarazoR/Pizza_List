import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { Item } from '../Types';


interface AppStateValue {
  cart: {
    items: Item[]
  };
}

const defaultStateValue: AppStateValue = {
  cart: {
    items: [],
  }
}


export const AppStateContext = createContext(defaultStateValue);
export const AppStateDispatchContext = createContext<React.Dispatch<AddToCartAction> | undefined>(undefined);

interface Action<T> {
  type: T;
}

interface AddToCartAction extends Action<'ADD_TO_CART'> {
  payload: {
    item: Omit<Item,'quantity'>;
  };
}

interface InitializeCartAction extends Action<'INITIALIZE_CART'> {
  payload: {
    cart: AppStateValue['cart'];
  };
}

const reducer = (state: AppStateValue, action: AddToCartAction | InitializeCartAction) => {
  if(action.type === 'ADD_TO_CART'){
    const itemToAdd = action.payload.item;
    const itemExists = state.cart.items.find(item => item.id === itemToAdd.id);
    return (
      {
        ...state,
        cart: {
          ...state.cart,
          items: itemExists ? state.cart.items.map(item => {
            if(item.id === itemToAdd.id){
              return {...item,quantity: item.quantity + 1}
            }
            return item;
          }) : [
          ...state.cart.items,
          {...itemToAdd, quantity: 1}
            ]
        }
      }
    )

  } else if (action.type === 'INITIALIZE_CART') {
    return {...state, cart:action.payload.cart};
  }
  return state;
}
export const useStateDispatch = () => {
  const setState = useContext(AppStateDispatchContext);
  if(!setState){
    throw new Error('useStateDispatch was called outside of the AppSetStateContext Provider');
  }
  return setState;
}

const AppStateProvider: React.FC = ( {children}) => {
  const [state,dispatch] = useReducer(reducer,defaultStateValue);

  useEffect( () => {
    const cart = window.localStorage.getItem('cart');
    if(cart){
      dispatch({type: 'INITIALIZE_CART', payload: {cart: JSON.parse(cart)}})
    }
  },[]);
  useEffect(() => {
    window.localStorage.setItem('cart',JSON.stringify(state.cart))
  },[state.cart]);

  return (
    <AppStateContext.Provider value={state}>
      <AppStateDispatchContext.Provider value={dispatch}>
        {children}
      </AppStateDispatchContext.Provider>
    </AppStateContext.Provider>)
};

export default AppStateProvider;