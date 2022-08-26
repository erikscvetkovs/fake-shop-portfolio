import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navigation';
import Products from './components/products/Products'
import Cart from './components/cart/Cart';
import ProductDetailed from './components/product-detailed/ProductDetailed'
import Overview from './components/overview/Overview'
import { useSelector } from 'react-redux'


import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const cartState = useSelector((state) => state.cart)
  return (
    <BrowserRouter>
      <Navbar/>
      { cartState.isOpen ? (
        <Cart/>
      ) : null}
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/category/:category" element={<Products/>}/>
        <Route path="item/:id" element={<ProductDetailed/>}/>
        <Route path="overview/:step" element={<Overview/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
