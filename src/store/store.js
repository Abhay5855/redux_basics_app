import { createStore } from "redux";
import Simplereducer, { increment } from "../redux/reducers/Simplereducer";


 const store = createStore(Simplereducer);



 store.dispatch(increment());

 console.log(store);

 console.log(store.dispatch(increment()));

 console.log(store.getState());



 export default store;



