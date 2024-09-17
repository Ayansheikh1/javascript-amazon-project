
class Cart {
  cartItems;
  localStorageKey;

  constructor(localStorageKey){ 
    this.localStorageKey = localStorageKey;
    this.#loadFromStorage();
  }

  #loadFromStorage() {
    this.cartItems = JSON.parse(localStorage.getItem(this.localStorageKey));
  
    if (!this.cartItems) {
      this.cartItems = [{
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2,
        deliveryOptionId: '1'
      },
      {
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 1,
        deliveryOptionId: '2'
      }
      ];
    }
  
  };

  saveStorage() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartItems));
  };

  addToCart(productId) {
    let matchingItem;
  
    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });
  
    // const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`
    // );
  
  
  
    // const quantity = Number(quantitySelector.value);
  
    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      this.cartItems.push({
        productId,
        quantity: 1,
        deliveryOptionId: '1'
  
        // productId: productId,
        // quantity: quantity 
  
      });
    }
    this.saveStorage();
  };

  removeFromCart(productId) {
    const newCart = [];
    this.cartItems.forEach((cartItem) => {
      if (cartItem.productId !== productId) {
        newCart.push(cartItem);
      }
  
    });
    this.cartItems = newCart;
    this.saveStorage();
  };

  calculateCartQuantity() {
  
    let cartQuantity = 0;
    this.cartItems.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
  
  
    });
  
    return cartQuantity;
  
  
  };

  updateQuantity(productId, newQuantity) {
    let matchingItem;
  
    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
  
    });
  
    matchingItem.quantity = newQuantity;
  
  
    this.saveStorage();
  
  };

  updateDeliveryOption(productId, deliveryOptionId) {
  
    let matchingItem;
  
  
    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
     
    });
    if(!matchingItem){
      return;
    }
  
    matchingItem.deliveryOptionId = deliveryOptionId;
  
    this.saveStorage();
  
  };

  
}


export const cart = new Cart('cart-oop');
const businessCart = new Cart('cart-business');




console.log(cart);
console.log(businessCart);

console.log(cart instanceof Cart);


export function loadCart(fun){  

  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', () => {
    console.log(xhr.response);
    fun();
    });


  xhr.open('GET', 'https://supersimplebackend.dev/products');
  xhr.send();

 }































