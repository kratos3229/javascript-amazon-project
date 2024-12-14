import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import '../data/backend-practice.js'
// import '../data/cart-class.js'; // Runs all the code in the file.

// MVC (Model-View-controller). MVC is a design pattern.

// async makes a funtion return a promise and lets us use await
async function loadPage() {
  try {
    // throw 'error1';

    await loadProductsFetch(); // await lets us use asynchronous code like normal code

    await new Promise((resolve) => {
      loadCart(() => {
        resolve('value2');
      });
    });

  } catch (error) {
    console.log('Unexpected error. Please try again later.');
  }

  renderOrderSummary();
  renderPaymentSummary();

}
loadPage();

/*
// Waits for all promises to finish before the next step.
Promise.all([
  // doesnt need "new Promise" code since loadProductsFetch already returns a promise
  loadProductsFetch(),

  new Promise((resolve) => {
    loadCart(() => {
      resolve('value2');
    });
  })

]).then((values) => {
  console.log(values);
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve('value1');
  });

}).then((value) => {
  console.log(value);

  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });

}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/

// loadProducts(() => {
//   renderOrderSummary();
//   renderPaymentSummary();
// });
