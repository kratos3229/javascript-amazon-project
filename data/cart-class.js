// Use PascalCase for things that generate objects.

class Cart {
  cartItems; // carItems = undefined;
  localStorageKey;

  // Constructor runs everytime an object is initialized.
  constructor(localStorageKey) {
    this.localStorageKey = localStorageKey;
    this.loadFromStorage();
  }

  loadFromStorage() {
    this.cartItems = JSON.parse(localStorage.getItem(this.localStorageKey)); // Will give null if cart is empty
  
    // Checks if cart is empty. If empty, sets a default value.
    if(!this.cartItems) {
      this.cartItems = [
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
  }

  // Saves cart to local storage.
  saveToStorage() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartItems));
  }

  addToCart(productId) {
    let matchingItem;
    this.cartItems.forEach(cartItem => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });
  
    // If item already exists, increase quantity by 1
    if (matchingItem) {
      matchingItem.quantity++;
    } else {
      this.cartItems.push({
        productId,
        quantity: 1,
        deliveryOptionId: '1'
      });
    }

    this.saveToStorage();
  }

  // Removes an item from cart
  removeFromCart(productId) {
    const newCart = [];
  
    this.cartItems.forEach(cartItem => {
      if(cartItem.productId !== productId) {
        newCart.push(cartItem);
      }
    });
  
    this.cartItems = newCart;
  
    this.saveToStorage();
  }

  // Updates delivery option
  updateDeliveryOption(productId, deliveryOptionId) {
  
    let matchingItem;
  
    this.cartItems.forEach(cartItem => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });
  
    matchingItem.deliveryOptionId = deliveryOptionId;
  
    this.saveToStorage();
  }
}

// values inside Cart() is saved in the constructor.
const cart = new Cart('cart-oop');
const businessCart = new Cart('cart-business');

console.log(cart);
console.log(businessCart);
console.log(businessCart instanceof Cart);
