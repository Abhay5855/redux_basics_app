
import { combineReducers } from 'redux';
import { ADD_PROFILE, ADD_TITLE } from '../actions/Action';
// import {title , profile} from '../action_creators.js/Action_creator'



// initialstate
const initialstate = {
  users: [
    {
      id: 1,
      title: "react cookbook",
    },

    {
      id: 2,
      title: "redux basics",
    },
  ],

  profile: [
    {
      name: "Abhay",
      profile: "react developer",
    },

    {
      name: "Heena",
      profile: "Application developer",
    },
  ],
};

export const Title_reducer = (title = initialstate.users, action) => {
      
     if(action.type === ADD_TITLE){

          
           
            return {

                
                users : [...title , action.payload]


                  
            }

            
     }


     return title;

       
};



export const Profile_reducer = (profile=initialstate.profile , action) => {

              if(action.type  === ADD_PROFILE){

                     return {
                     

                           profile : [...profile , action.payload]
                     }

                      
              }

              return profile ;
}



export const reducer = combineReducers({users : Title_reducer , profile : Profile_reducer});


