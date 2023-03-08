import { toast } from 'react-toastify';

const initialState = {
  products: [],
  googleLoginData: {},
  cart: [],
};
 
export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };

    case "ADD_TO_CART":
      const exist = state.cart.some((val) => val.id === action.payload.id);
      if (exist === true) {
        toast('Already added in cart !', {
          position: toast.POSITION.TOP_CENTER
      });
      } else {
        let data = {
          ...action.payload,
          quantity: 1,
        };
        state.cart.push(data);
      }
      return { ...state, cart: state.cart }

    case "REMOVE_PRODUCT":
      return {
        ...state,
        cart: state.cart.filter((p) => p.id !== action.payload, toast.info('Product deleted from cart !', {
          position: toast.POSITION.TOP_CENTER
      }) ),
      };

    case "INCREASE_QTY":
      let cartIncrement = state.cart.map((product) => {
        if (action.payload === product.id) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
      return { ...state, cart: cartIncrement };

    case "DECREASE_QTY":
      let cartDecrement = state.cart.map((product) => {
        if (action.payload === product.id) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      });
      return { ...state, cart: cartDecrement };
      
    case "GOOGLE_LOGIN_DATA":
      return { ...state, googleLoginData: action.payload };

    default:
      return state;
  }
};



