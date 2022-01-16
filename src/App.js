
import React from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter, Navigate, Route, Routes
} from "react-router-dom";
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Success from './pages/Success';


const App = () => {
const user = useSelector(state => state?.user?.currentUser)
  return (
    <BrowserRouter>
    <Routes>
<Route path="/" element={<Home/>} />
<Route path="/home" element={<Home/>} />
<Route path="/products/:catagory" element={<ProductList/>} />
<Route path="/product/:id" element={<Product/>} />
<Route path="/cart" element={user?<Cart/>:<Login/>} />
<Route path="/login" element={user? <Navigate to="/"/>: <Login/>} />
<Route path="/register" element={<Register/>} />
<Route path="/success" element={<Success/>} />
<Route path="*" element={<NotFound/>} />


    </Routes>
    </BrowserRouter>
  );
};

export default App;