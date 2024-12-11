import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
// import '../data/backend-practice.js'
// import '../data/cart-class.js'; // Runs all the code in the file.

// MVC (Model-View-controller). MVC is a design pattern.

loadProducts(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
