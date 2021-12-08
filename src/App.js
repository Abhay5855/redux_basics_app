import "./App.css";
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import Product_List from "./components/products_components/Product_List";
import Selected_Product from "./components/products_components/Selected_Product";
import Selected_Characters from "./components/rick_morty_components/Selected_Character";
import Display_Characters from "./components/rick_morty_components/Display_Characters";

function App() {
  return (


    
    <div className="App">


      {/* <Product_List /> */}

      {/* <Selected_Product /> */}

      <Router>

      <Routes>

        

          <Route  path ='/' element={<Display_Characters/>} />

          <Route path='/character/:id' element={<Selected_Characters />} />

        

      </Routes>


   </Router>


    
    </div>
  );
}

export default App;
