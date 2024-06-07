// ProductListingPage.js
import React, { useState ,useContext} from 'react';
import { Link } from 'react-router-dom';
import images from '../assets/Images';
import CartPage from './CartPage';
import './ProductListingPage.css'
import { CartContext } from '../context/CartContext';
function ProductListingPage() {
  const {cart, setCart} =useContext(CartContext)

  const products = [
    { id: 1, name: 'Samsung Galaxy M15 5G', price: 12999, image:images.product1 },
    { id: 2, name: 'OnePlus 12', price: 64999, image: images.product2 },
    { id: 3, name: 'Samsung Galaxy S24 ', price: 139999, image:images.product3 },
    { id: 3, name: 'Redmi 13C 5G', price: 10499, image:images.product4 },
  ];

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      alert('This product is already in the cart');
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    

  };

  return (
    <>
    <div className='product-listing-container'>
     
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}Rs</p>
           
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}

      </div>
    
    </div>
    </>
  );
}

export default ProductListingPage;
