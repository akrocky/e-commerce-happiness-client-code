
import React from 'react';
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';


const App = () => {
  return (
    <Router>
    <Routes>
<Route path="/" element={<Home/>} />
<Route path="/products/:catagory" element={<ProductList/>} />
<Route path="/product/:id" element={<Product/>} />
<Route path="/cart" element={<Cart/>} />
<Route path="/login" element={<Login/>} />
<Route path="/register" element={<Register/>} />


    </Routes>
    </Router>
  );
};

export default App;