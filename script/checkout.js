
import{renderOrderSummary} from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { renderCheckoutHeader } from './checkout/checkoutHeader.js';
import '../data/car.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCart } from '../data/cart-class.js';



Promise.all([
 loadProductsFetch(), 
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












