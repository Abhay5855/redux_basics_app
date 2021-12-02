

import {ADD_TITLE  , ADD_PROFILE } from "../actions/Action";


export const title = (title) => ({type : ADD_TITLE , payload : title} );

export const profile = (profile) => ({type : ADD_PROFILE , payload : profile} );
