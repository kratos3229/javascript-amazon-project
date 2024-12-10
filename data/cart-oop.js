// Use PascalCase for things that generate objects.

function Cart(localStorageKey) {
  const cart = {
    // let cartItems = undefined;
    cartItems: undefined,
  
    loadFromStorage() {
      this.cartItems = JSON.parse(localStorage.getItem(localStorageKey)); // Will give null if cart is empty
    
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
    },
  
    // Saves cart to local storage.
    saveToStorage() {
      localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
    },
  
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
    },
  
    removeFromCart(productId) {
      const newCart = [];
    
      this.cartItems.forEach(cartItem => {
        if(cartItem.productId !== productId) {
          newCart.push(cartItem);
        }
      });
    
      this.cartItems = newCart;
    
      this.saveToStorage();
    },
  
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
  };

  return cart;
}

const cart = Cart('cart-oop');
const businessCart = Cart('cart-business');


cart.loadFromStorage();
businessCart.loadFromStorage();

console.log(cart);
console.log(businessCart);
