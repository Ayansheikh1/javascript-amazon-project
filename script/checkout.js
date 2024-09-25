
import{renderOrderSummary} from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { renderCheckoutHeader } from './checkout/checkoutHeader.js';
//import '../data/car.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCart, loadCartFetch } from '../data/cart-class.js';



  async function loadPage(){
   try {
    /*throw 'error1'; manual error*/ 

    await loadProductsFetch();

    await loadCartFetch();
  
    /*
    await new Promise((resolve, reject) => {
      //throw 'error2';
      loadCartFetch(() => {
        //reject('error3');
        resolve();
      });
    });
    */

} catch (error) {
  console.log('Unexpected error. Please try again later.');
}



  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
}

loadPage();



/*
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
*/


/*
loadProducts(() => {
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});

*/












