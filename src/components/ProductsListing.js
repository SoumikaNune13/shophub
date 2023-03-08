import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { FetchProducts, fetchCart } from "../redux/actions/actions";
import { Button, ToastContainer } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "../components/index.css";
import 'react-toastify/dist/ReactToastify.css';

export const ProductsListing = () => {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(FetchProducts());
  }, []);

  return (
    <>
      <center><h3>PRODUCTS</h3></center>
      <div className="main-container">
        {productsList.map((p) => (
          <Card key={p.id}>
            <Card.Img
              variant="top"
              src={p.image}
              style={{ width: "180px", height: "200px", alignSelf: "center" }}
            />
            <Card.Body>
              <Card.Title >{p.title}</Card.Title>
            </Card.Body>
            <Button size="sm"
              variant="warning"
              style={{ width: "150px" }}
              onClick={() => dispatch(fetchCart(p.id))}
            >
              Add to Cart
            </Button>
          </Card>
        ))}
      </div>
      <ToastContainer/>
    </>
  );
};
