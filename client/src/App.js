import './App.css'
import Navbaar from './component/header/navbaar';
import Newnav from './component/Newnav/Newnav';
import Maincomp from './component/home/Maincomp'
import Footer from './component/footer/Footer';
import { Routes,Route } from 'react-router-dom';
import Signin from './component/signup-sign/Signin';
import Signup from './component/signup-sign/Signup';
import Cart from './component/cart/Cart';
import Item from './component/itemdetail/Item';

function App() {
  return (
    <>
      <Navbaar/>
      <Routes>  
        <Route path='/' element={<Maincomp/> }></Route>
        <Route path='/login' element={<Signin/>}></Route>
        <Route path='/register' element={<Signup/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/getproducts/:id' element={<Item/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
