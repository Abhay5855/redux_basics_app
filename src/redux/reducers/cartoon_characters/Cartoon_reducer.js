import { ALL_CHARACTERS } from "../../actions/Action";






const initialState =  [];
     






export const Displayall_characters = (state=initialState , {type , payload} ) => {


      switch(type){

             case ALL_CHARACTERS:

                  return {...state , characters : payload};


                  default : 

                      return state;
      }


      

          


     
}