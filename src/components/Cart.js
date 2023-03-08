import React from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  removeProduct,
  increaseQty,
  decreaseQty,
} from "../redux/actions/actions";
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

export const Cart = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);
  console.log(cartState)
  // const totalPrice = cartState.reduce((total, value) => { return total + value.price * value.quantity  }, 0)
  //  console.log(totalPrice, "total price")
  // const totalItems = cartState.reduce((total, value) => { return total + value.quantity}, 0)
  // console.log(totalItems, "total items")
  return (
    <>
      <div className="cart_main_container">
        {cartState.length > 0 ? (
          <>
          <h4>Cart Items: </h4>
            {cartState.map((item) => (
              <div className="cart_container" key={item.id}>
                <div className="cart_img">
                  <img src={item.image} alt="productImage" />
                </div>
                <div className="cart_text">
                  <p>
                    <b>{item.title}</b>
                  </p>
                  <div>
                    <p>
                      <b>Price: </b> $ {item.price * item.quantity.toFixed(2)}
                    </p>
                    &nbsp;&nbsp;&nbsp;
                    {item.quantity > 1 ? (
                      <>
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => dispatch(decreaseQty(item.id))}
                        >
                          -
                        </Button>
                      </>
                    ) : (
                      <Button size="sm" variant="secondary">
                        -
                      </Button>
                    )}
                    {item.quantity}
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => dispatch(increaseQty(item.id))}
                    > 
                      +
                    </Button>{" "}
                    &nbsp; &nbsp;
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => {
                        dispatch(removeProduct(item.id));
                      }}
                    >
                      Remove Product
                    </Button>
                  </div>
                </div>
              </div>
            ))}
            <ToastContainer/>
            
          </>
        ) : (
          <div>
           <center> <h3>Your Cart is empty !</h3> </center>
          </div>
        )}
      </div>
    </>
  );
};
