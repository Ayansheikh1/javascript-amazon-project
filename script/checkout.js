
import{renderOrderSummary} from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { renderCheckoutHeader } from './checkout/checkoutHeader.js';
import '../data/car.js';
import { loadProducts } from '../data/products.js';
import { loadCart } from '../data/cart-class.js';



Promise.all([
  new Promise((resolve) => {
    loadProducts(() => {
      resolve();
    });
  }),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })
]).then(() => {
  
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});


/*
loadProducts(() => {
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});

*/












