export const cart = [];

export function addToCart(productId) {
  let matchingItem;
  cart.forEach(cartItem => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  // If item already exists, increase quantity by 1
  if (matchingItem) {
    matchingItem.quantity++;
  } else {
    cart.push({
      productId,
      quantity: 1
    });
  }
}

