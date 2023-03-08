import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ProductsListing } from "./components/ProductsListing";
import { Cart } from "./components/Cart";
import { SignUp } from "./components/SignUp";
import { Login } from "./components/Login";
import { PageNotFound } from "./components/PageNotFound";



const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element = {<ProductsListing />} />
          <Route path="/home" element = {<ProductsListing />}/>
          <Route path="/cart" element = {<Cart />} />
          <Route path="/signUp" element = {<SignUp />} />
          <Route path="/login" element = {<Login />} />
          <Route path="*" element = {<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
