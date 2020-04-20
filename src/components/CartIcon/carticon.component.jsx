import React from 'react';
import './carticon.styles.scss';

import { connect } from 'react-redux';
import { toggleCheckOutCart } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingBag } from '../../assets/shopping-cart.svg';

import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCheckOutCart, itemCount }) => {
  return (
    <div className='cart-icon' onClick={toggleCheckOutCart}>
      <ShoppingBag className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCheckOutCart: () => dispatch(toggleCheckOutCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
