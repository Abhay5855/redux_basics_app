import { combineReducers,createStore } from "redux";
import { bindActionCreators } from "redux";
import { devToolsEnhancer } from 'redux-devtools-extension';


import Product_reducer from "../redux/reducers/Product_reducer";


// const reducer = combineReducers(Product_reducer);

const rootReducer = combineReducers({
    allProducts : Product_reducer
});


const store = createStore(rootReducer, devToolsEnhancer(
   

   
));

// console.log(store.getState());

// console.log(store);




export default store;
