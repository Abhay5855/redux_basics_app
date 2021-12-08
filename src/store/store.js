import { combineReducers, createStore } from "redux"
import { devToolsEnhancer } from "redux-devtools-extension";
import { Displayall_characters } from "../redux/reducers/cartoon_characters/Cartoon_reducer";
import { Products_reducer, selected_reducer } from "../redux/reducers/Product_reducer"






const reducers = combineReducers({


     // allProducts : Products_reducer,
     // product : selected_reducer,
     allCharacters : Displayall_characters,


 

});


const store = createStore(reducers , devToolsEnhancer(



));



export default store;