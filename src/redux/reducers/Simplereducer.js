import { INCREMENT, ADD } from "../actions/Action";

// Initial state
const initialState = { value: 0 };

// action creators

export const increment = () => ({ type: INCREMENT });

export const add = (amount) => ({ type: ADD, payload: amount });

const Simplereducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    
    return {value : state.value + 1}

    // console.log('val' , state.value + 1);

    // return { value };
    
  }

  if (action.type === ADD) {
  
    return {value : state.value + action.payload}

    // return { result };
  } 

  return state;
};

export default Simplereducer;
