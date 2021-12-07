import { useSelector , useDispatch} from "react-redux";
import { useEffect } from "react";
import axios from 'axios';
import { set_products } from "../../redux/action_creators.js/Action_creator";

import './product_list.css';
import { Link } from "react-router-dom";








const Product_List = () => {


    const dispatch = useDispatch();

    const products = useSelector((state) => state.allProducts.products);


    const display = products.map((product , idx) => {

        return (
                
            


            <div className='main' key={idx}>

                <Link to={`/selected/${product.id}`}>

                <figure>

                     <div>
                         <img src={product.image} alt='img' />
                     </div>

                    <figcaption>

                        <h3>{product.title}</h3>
                        <span>$ {product.price}</span>
                        <p>Category : {product.category}</p>

                    </figcaption>

                </figure>

                </Link>

            </div>

           

        
           

        )
            
                
    })

    // console.log(products);


    // get api 

    const Getall_products = async() => {

         const result = await axios.get('https://fakestoreapi.com/products')

        

         .catch((err) => {
              console.log(err)
         })

         dispatch(set_products(result.data));
        //  console.log('products' , result.data);
          
          
    }


     useEffect(() => {

         Getall_products();

     },[]);
         


    //  console.log(products , 'products');


     

    
     
    return (

        // <>
        // <h1>Products page</h1>

        <div>{display}</div>
        // </>
       

         
         
         
    )
}


export default Product_List;