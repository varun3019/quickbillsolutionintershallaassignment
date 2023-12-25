import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Component/Navbar';
import Shop from './Component/Shop';
import Cart from './Component/Cart.jsx';
import { ShopContextProvider } from './context/ShopContex';
import ProductDetails from './Component/ProductDetails.jsx';
import CheckOut from './Component/CheckOut.jsx'

function App() {
  return (
    <div>
    <ShopContextProvider>
     <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route path='/' element = {<Shop/>}/>
     <Route path='/cart' element= {<Cart/>}/>
     <Route path='/ProductDetails/:pid' element={<ProductDetails />} />
     <Route path='/checkout' element = {<CheckOut/>}/>
     </Routes>
     </BrowserRouter>
     </ShopContextProvider>
    </div>
  );
}

export default App;
