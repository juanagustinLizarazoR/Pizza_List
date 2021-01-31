import React from 'react';
import { Item } from '../Types';
import { useStateDispatch } from './AppState';



export interface AddToCartProps {
  addToCart: (item: Omit<Item,'quantity'>) => void;
}



export function withAddToCart<OriginalProps extends AddToCartProps>(ChildComponent: React.ComponentType<OriginalProps>){
  function AddToCartHOC(props: Omit<OriginalProps,'addToCart'>) {
    const dispatch = useStateDispatch();
    const handleAddToCartClick = (item: Omit<Item,'quantity'>) =>{
      dispatch({
        type: 'ADD_TO_CART',
        payload: {
          item
        }
      })
    }
    return <ChildComponent {...props as OriginalProps} addToCart={handleAddToCartClick} />
  };
  return AddToCartHOC;
}