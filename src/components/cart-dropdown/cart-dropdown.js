import React from 'react';
import './cart-dropdown.scss';
import CustomButton from '../custom-button/custom-button'
import CartItem from '../cart-item/cart-item';
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";

const CartDropdown = ({cartItems}) => {
  const navigate = useNavigate();
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          cartItems.length ? (
          cartItems.map(cartItem => 
          (<CartItem key={cartItem.id} item={cartItem}/>))
          ) : (
            <span className='empty-message'>Your cart is empty</span>
          )
        }
      </div>
      <CustomButton onClick={() => navigate('/checkout')}>GO TO CHECKOUT</CustomButton>
    </div>
  );
}
const mapStateToProps = ({cart:{cartItems}}) => ({
  cartItems
});

export default connect(mapStateToProps)(CartDropdown);