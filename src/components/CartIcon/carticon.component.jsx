import React from 'react';
import './carticon.styles.scss';

import { connect } from 'react-redux';
import { toggleCheckOutCart } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingBag } from '../../assets/shopping-cart.svg';

const CartIcon = ({ toggleCheckOutCart }) => {
  return (
    <div className='cart-icon' onClick={toggleCheckOutCart}>
      <ShoppingBag className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCheckOutCart: () => dispatch(toggleCheckOutCart()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
