import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./Header.css";




const Header = () => {
  const { cart } = useContext(CartContext);

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <>
      <div className=" container">
        <div className=" div-h1">
          <h1 className="logo">BuyIt</h1>
        </div>

        <div className="div-a">
          <Link to="/">Home</Link>
          <Link to="/cart">
          Cart
          {cartItemCount > 0 && (
            <span className="cart-count">{cartItemCount}</span>
          )}
        </Link>
        
        </div>
      </div>
    </>
  );
};

export default Header;
