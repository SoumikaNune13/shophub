import React from "react";
import { Button } from "react-bootstrap";
import { GoogleLoginAuthentication } from "./GoogleAuthentication";

export const Login = () => {
  return (
    <>
      <form>
        <center>
          <h3>Login</h3>
          <div>
            <label>Email</label> <input type="text" /> <br /> <br />
            <label>Password</label> <input type="password" /> <br /> <br />
            <Button variant="success">Login</Button>
            <h3>or</h3>
            <GoogleLoginAuthentication />
          </div>
        </center>
      </form>
    </>
  );
};
