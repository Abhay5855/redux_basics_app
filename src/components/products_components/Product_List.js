import { useSelector , useDispatch} from "react-redux";
import { useEffect } from "react";
import axios from 'axios';
import { set_products } from "../../redux/action_creators.js/Action_creator";










const Product_List = () => {


    const dispatch = useDispatch();

    const products = useSelector((state) => state.allProducts.products);


    const display = products.map((product , idx) => {

        return (

            <h1>{product.title}</h1>

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
         <>

         <h1>Products</h1>

         <div>{display}</div>
         
         </>
    )
}


export default Product_List;