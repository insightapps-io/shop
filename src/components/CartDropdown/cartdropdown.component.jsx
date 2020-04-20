import React from 'react';
import './cartdropdown.styles.scss';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../CustomButton/custombutton.component';
import CartItem from '../CartItem/cartitem.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import { connect } from 'react-redux';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>Check Out</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
