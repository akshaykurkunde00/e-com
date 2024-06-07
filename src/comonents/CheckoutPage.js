import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './CheckoutPage.css';

function CheckoutPage() {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleContinueShopping = () => {
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <div className='checkout-container'>
      <h1>Checkout Page</h1>
      <h3>Cart Summary</h3>
      <p>Total Quantity: {totalQuantity}</p>
      <p>Total Price: ${totalPrice}</p>

      <Popup trigger={<button className="proceed-btn">Continue Shopping</button>} modal nested>
        {close => (
          <div className="popup-content">
            <h2>Thank you for shopping! 😊</h2>
           
            <button
              onClick={() => {
                handleContinueShopping();
                close();
              }}
            >
              OK
            </button>
          </div>
        )}
      </Popup>
    </div>
  );
}

export default CheckoutPage;
