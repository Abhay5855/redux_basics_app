
import { compose } from 'redux';




const Compose = () => {

    const upper = string => string.toUpperCase();

    const repeat = string => string.repeat('2');
  
    const bolden = string => string.bold();
  
    const AllFunctions = compose(bolden ,repeat , upper);
  
    console.log(AllFunctions('Heena'));
  

     return (

        <></>


     )
}


export default Compose;