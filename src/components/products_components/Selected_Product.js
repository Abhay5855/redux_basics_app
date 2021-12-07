import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { select_product , remove_product} from "../../redux/action_creators.js/Action_creator";
import Product_List from "./Product_List";

import './product_list.css'




const Selected_Product = () => {


    const  product_id  = useParams();

    console.log(product_id.id);


    const product = useSelector((state) => state.product)

    console.log(product);

    const dispatch = useDispatch();

     const choosed_product = async() => {

         const result = await axios.get(`https://fakestoreapi.com/products/${product_id.id}`)
        
         .catch((err) => {
              console.log(err);
         })

         console.log(result.data);

         dispatch(select_product(result.data));
         
        
              
     }


     useEffect(() => {

           choosed_product();

           return ()  => {
                dispatch(remove_product())
           }

     },[product_id])
     

    return (
         <>

         <h2>Selected Product</h2>

           <div className='main'>

               <figure>
                   <img src={product.image} alt='img' />

                     <figcaption>

                         <h3>{product.title}</h3>
                         <span>{product.category}</span>
                         <p> ${product.price}</p>

                     </figcaption>
               </figure>




           </div>


         </>
    )
}


export default Selected_Product;