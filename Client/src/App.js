import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from "./pages/home/HomePage";
import ProductPreview from './pages/ProductPreview/ProductPreview';
import Login from './pages/profile/seller/logIn/Login';
import ProductUpload from './pages/profile/seller/productUpload/ProductUpload';
import SignUp from './pages/profile/seller/signUp/SignUp';
import Cart from './pages/cart/Cart';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>

    <Route path='/' element={<HomePage />}></Route>
    <Route path='/seller-sign-up' element={<SignUp />}></Route>
    <Route path='/seller-log-in' element={<Login />}></Route>
    <Route path='/upload-item' element={<ProductUpload />}></Route>
    <Route path='/product-preview/:id' element={<ProductPreview />}></Route>
    <Route path='/cart' element={<Cart />}></Route>
    

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
