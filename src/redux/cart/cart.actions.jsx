import cartActionTypes from './cart.types';

export const toggleCheckOutCart = () => ({
  type: cartActionTypes.TOGGLE_SHOPPING_CART,
});

export const addItem = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});
