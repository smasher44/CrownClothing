import CartActionTypes from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [] // state here will be reference in the drop icon 
};

const cartReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    case CartActionTypes.ADD_ITEM:
      /* cartItems: [...state.cartItems, action.payload ({})] <-- old code
         Note: cartItems will be filled of an array of objects(item)
         e.g. [{},{},{}] and item = { name, imageUrl, price } */
      return { ...state, cartItems: addItemToCart(state.cartItems, action.payload)};
      // addItemToCart is the funcion written in the utility file
    case CartActionTypes.REMOVE_ITEM:
        return { ...state, cartItems: removeItemFromCart(state.cartItems, action.payload)};
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return { ...state, cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)}  
    default:
      return state;
  }
}

export default cartReducer;












