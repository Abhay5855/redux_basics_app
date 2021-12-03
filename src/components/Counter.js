import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {decrement, increment, reset} from '../redux/action_creators.js/Action_creator'


const Counter = () => {

      const count = useSelector((state) => state.count);

      const dispatch = useDispatch();

    return (

        <>

        <h1>Counter example using redux</h1>

        <h1>{count}</h1>

        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(reset(0))}>reset</button>
        
        </>

         
    )


     
}

export default Counter;