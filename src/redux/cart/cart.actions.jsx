import cartActionTypes from './cart.types';

export const toggleCheckOutCart = () => ({
  type: cartActionTypes.TOGGLE_SHOPPING_CART,
});

export const addItem = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});

export const clearItem = (item) => ({
  type: cartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const removeItem = (item) => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item,
});
