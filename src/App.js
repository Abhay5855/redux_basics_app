import "./App.css";
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import Product_List from "./components/products_components/Product_List";
import Selected_Product from "./components/products_components/Selected_Product";

function App() {
  return (


    
    <div className="App">


      <Product_List />

      {/* <Selected_Product /> */}

      {/* <Router>

      <Routes>

        

          <Route  path ='/' element={<Product_List/>} />

          <Route path='/selected' element={<Selected_Product />} />

        

      </Routes>


   </Router> */}


    
    </div>
  );
}

export default App;
