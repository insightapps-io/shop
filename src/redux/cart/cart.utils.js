export const addItemToCart = (cartItems, itemToAdd) => {
  const isExistingItem = cartItems.find(
    (cartItem) => cartItem.id === itemToAdd.id
  );

  if (isExistingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === itemToRemove.id
  );

  if (existingItem.quantity > 1) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  } else {
    return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
  }
};
