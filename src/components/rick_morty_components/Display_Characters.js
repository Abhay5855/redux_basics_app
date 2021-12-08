import { useEffect } from "react";
import axios  from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { all_characters } from "../../redux/action_creators.js/Action_creator";


const Display_Characters = () => {

     const characters = useSelector((state) => state);

     console.log(characters);


     const dispatch = useDispatch();


     const display = async() => {

             const response =await axios.get('https://rickandmortyapi.com/api/character')
             .catch((err) => {
                   console.log(err)
             })


             console.log(response.data.results);
             dispatch(all_characters(response.data.results));
     }

        

     console.log('characters' , characters);




     useEffect(() => {

          display()

     },[]);

     return (
          <>

          <h2>Rick and Morty characters</h2>


          
          </>
     )
}

export default Display_Characters;