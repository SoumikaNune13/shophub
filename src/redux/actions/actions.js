import axios from "axios";
 
export const getProducts = (data) => {
  return { 
    type: "GET_PRODUCTS",
    payload: data,
  };
};

export const addToCart = (data) => {
  return {
    type: "ADD_TO_CART",
    payload: data,
  };
};

export const removeProduct = (id) => {
  return {
    type: "REMOVE_PRODUCT",
    payload: id,
  }; 
};

export const increaseQty = (id) => {
  return {
    type: "INCREASE_QTY",
    payload: id,
  };
};

export const decreaseQty = (id) => {
  return {
    type: "DECREASE_QTY",
    payload: id,
  };
};

export const googleLoginData = (data) => {
  return {
    type: "GOOGLE_LOGIN_DATA",
    payload: data,
  };
};

export const fetchCart = (id) => {
  return  (dispatch) => {
     axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => dispatch(addToCart(response.data)))
      .catch((error) => console.log(error));
  };
};

export const FetchProducts = () => {
  return  (dispatch) => {
     axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        let d = response.data;
        dispatch(getProducts(d));
      })
      .catch((error) => console.log(error));
  };
};

