import { legacy_createStore, applyMiddleware } from "redux";
import { ProductReducer } from "./reducers/ProductReducer";
import thunk from "redux-thunk";

 
const store = legacy_createStore(
  ProductReducer, applyMiddleware(thunk),
);
export default store;
