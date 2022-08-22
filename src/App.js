import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navigation';
import Products from './components/products/Products'
import { useSelector, useDispatch } from 'react-redux'
import { addOrder } from './features/order/orderSlice'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

function App() {
  // fetch('https://fakestoreapi.com/products')
  //   .then(res => res.json())
  //   .then(json => console.log(json))
  // const orders = useSelector((state) => state.orders.items)
  // const dispatch = useDispatch();
  // return (
  //   <div className="App">
  //     <div>
  //       {orders.map(order => {
  //         return (order)
  //       })}
  //     </div>
  //     <button onClick={() => {
  //       dispatch(addOrder('huj'))
  //     }}>Click me</button>
  //   </div>
  // );
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/category/:category" element={<Products/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
