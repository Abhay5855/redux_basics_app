import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
  RESET_COUNTER,
} from "../actions/Action";

const initialstate = { count: 1 };

const Counter_reducer = (state = initialstate, action) => {
  if (action.type === INCREMENT_COUNTER) {
    return { count: state.count + 1 };
  }

  if (action.type === DECREMENT_COUNTER) {
    return { count: state.count - 1 };
  }

  if (action.type === RESET_COUNTER) {
    return { count: action.payload};
  }

  return state;
};

export default Counter_reducer;
