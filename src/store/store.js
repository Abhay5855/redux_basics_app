import { createStore } from "redux";
import Simplereducer from "../redux/reducers/Simplereducer";


 const store = createStore(Simplereducer);

 console.log(store);


 export default store;



