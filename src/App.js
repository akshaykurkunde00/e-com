import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductListingPage from './comonents/ProductListingPage';
import CartPage from './comonents/CartPage';
import CheckoutPage from './comonents/CheckoutPage';
import Header from './comonents/Header';
import { CartProvider } from './context/CartContext';
import './App.css';

function App() {
  return (



    <CartProvider>
         
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<ProductListingPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </Router>
     
    </CartProvider>
    
  );
}

export default App;
