// Gets cart from local storage.
export let cart = JSON.parse(localStorage.getItem('cart')); // Will give null if cart is empty

// Checks if cart is empty. If empty, sets a default value.
if(!cart) {
  cart = [
    {
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2,
      deliveryOptionId: '1'
    }, {
      productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity: 1,
      deliveryOptionId: '2'
    }
  ];
}

// Saves cart to local storage.
function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

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
      quantity: 1,
      deliveryOptionId: '1'
    });
  }

  saveToStorage();
}

export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach(cartItem => {
    if(cartItem.productId === productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;

  saveToStorage();
}

