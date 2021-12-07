import { REMOVE_SELECTED_PRODUCT, SELECTED_PRODUCT, SET_PRODUCT } from "../actions/Action";

const initialState = {
  products: []
};

// All products reducer

export const Products_reducer = (state = initialState, {type , payload}) => {
  switch (type) {
    case  SET_PRODUCT:
      
         return {...state , products : payload}

    default:
      return state;
  }
};



export const selected_reducer = (state={} , {type , payload}) => {

      switch(type){


              case SELECTED_PRODUCT : 

                 return {...state , ...payload}


                 case REMOVE_SELECTED_PRODUCT :
                    
                    return {};

                 default :
                  return state;
      }


          
}




