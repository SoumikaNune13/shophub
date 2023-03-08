import React from "react";
import { Button } from "react-bootstrap";
import { GoogleLoginAuthentication } from "./GoogleAuthentication";

export const SignUp = () => {
 

  return (
    <>
      <form >
        <center>
          <h3>SignUp</h3>
          <label>Name </label> <input type="text" /> <br />
          <br />
          <label>Email </label> <input type="email"  /> <br /> <br />
          <label>Phone No </label> <input type="tel"  /> <br /> <br />
          <label>Password </label> <input type="password" /> <br /> <br />
          <Button type="submit">Create account</Button>
          <h4>or</h4>
          <GoogleLoginAuthentication />
        </center>
      </form>
    </>
  );
};
