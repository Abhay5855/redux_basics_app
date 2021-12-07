import { SET_PRODUCT } from "../actions/Action"







const initialState = {

     products : [

          {
                
           id : 1,
           title : 'Gucchi shirt' ,
           category : 't-shirts',
           price : 2999,

          }

     ]
         
     
}


    
    




// Single product reducer 

export const Products_reducer = (state= initialState , action) => {


  switch(action.type){

            case (action.type === SET_PRODUCT):

                return state;

                default :

                return state;
  }




      
}


