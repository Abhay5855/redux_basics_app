
import { INCREMENT , ADD } from "../actions/Action";



// Initial state
const initialState = {value : 0}

// action creators

export const increment  = () => ({type : INCREMENT});

export const add = (amount) => ({type : ADD , payload : amount});




const Simplereducer = (state=initialState , action) => {

    if(action.type === INCREMENT){

        const value = state.value + 1;

        return {value};

         
    }

    if(action.type === ADD){
         
          const result = state.value + action.payload

          return {result};
    }

    else {

         return state;
    }


     
}


export default Simplereducer;