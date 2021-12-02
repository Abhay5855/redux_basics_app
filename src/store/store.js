import { createStore } from "redux";
import { bindActionCreators } from "redux";
// import Simplereducer, { increment , add} from "../redux/reducers/Simplereducer";
import {title , profile} from '../redux/action_creators.js/Action_creator'
import { reducer } from "../redux/reducers/Nestedreducer";
import { composeWithDevTools } from "redux-devtools-extension";
// const store = createStore(
//   reducer,
//   +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
const store = createStore(reducer, composeWithDevTools(
    // applyMiddleware(...middleware),
    // other store enhancers if any
  ));
// store.dispatch(increment());

// console.log(store);


// Subscriber 

const Subscriber = () => console.log('Subscriber' , store.getState());

// store.subscribe(Subscriber);

const actions = bindActionCreators({title , profile}, store.dispatch);

console.log(actions);

actions.title({title : 'sanika'});

actions.profile({profile : 'javascript developer'});

// actions.profile('sanika');


// console.log(store.dispatch(increment()));
// console.log(store.dispatch(increment()));
// console.log(store.dispatch(add(1000)));
// console.log(store.dispatch(add(200)));
// console.log(store.dispatch(add(700)));

console.log(store.getState(), 'get state');

export default store;
