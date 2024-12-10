import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import '../data/cart-oop.js'; // Runs all the code in the file.

// MVC (Model-View-controller). MVC is a design pattern.
renderOrderSummary();
renderPaymentSummary();