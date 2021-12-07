

import {ADD_TITLE  , ADD_PROFILE, INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUNTER, SET_PRODUCT, SELECTED_PRODUCT, REMOVE_SELECTED_PRODUCT } from "../actions/Action";


export const title = (title) => ({type : ADD_TITLE , payload : title} );

export const profile = (profile) => ({type : ADD_PROFILE , payload : profile} );



// counter 

export const increment = () => ({type : INCREMENT_COUNTER})
export const decrement = () => ({type : DECREMENT_COUNTER})
export const reset = (val) => ({type : RESET_COUNTER, payload : val})



//Clothing app


const set_products = (products) => ({

     type : SET_PRODUCT,
     payload : products,

      
})
      
       
const select_product = (product) => ({

      type : SELECTED_PRODUCT,
      payload : product,
}) 
     

const remove_product = (product) => ({
        
      type : REMOVE_SELECTED_PRODUCT,
      payload : product,
})



