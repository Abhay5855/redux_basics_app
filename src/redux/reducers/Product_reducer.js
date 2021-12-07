import { SET_PRODUCT } from "../actions/Action";




const initialState = {
      products : [
           {
                id : 1,
                name : 'Hoodie',
                price : 300,
           }
      ]
}


const Product_reducer = (state=initialState , action) => {

     switch(action.type){
           
          case (action.type === SET_PRODUCT):
               return state;


          default: 
          return state;
     }

    

   

 

}


export default Product_reducer;


