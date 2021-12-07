import { SET_PRODUCT } from "../actions/Action";

const initialState = {
  products: []
};

// Single product reducer

export const Products_reducer = (state = initialState, {type , payload}) => {
  switch (type) {
    case  SET_PRODUCT:
      
         return {...state , products : payload}

    default:
      return state;
  }
};
