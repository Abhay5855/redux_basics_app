import { combineReducers, createStore } from "redux"
import { devToolsEnhancer } from "redux-devtools-extension";
import { Products_reducer, selected_reducer } from "../redux/reducers/Product_reducer"






const reducers = combineReducers({
      
     allProducts : Products_reducer,
     product : selected_reducer,
});


const store = createStore(reducers , devToolsEnhancer(


));



export default store;