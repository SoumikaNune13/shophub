import React from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
import { useNavigate } from "react-router-dom";
import { googleLoginData } from "../redux/actions/actions";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const GoogleLoginAuthentication = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSuccess = (response) => {
    console.log(response);
    dispatch(googleLoginData(response.profileObj));
    sessionStorage.setItem("isLoggedIn", "true");
    if(response.profileObj.googleId){
          navigate("/") 
    }
    toast.success('Login Successfully!', {
      position: toast.POSITION.TOP_RIGHT
  });

  };

  const onFailure = (error) => {
    console.log("error", error);
  };

  return (
    <>
      <GoogleLogin
        clientId="761244506200-rc4j7j8tgo1eqhn1eo8k64b033quqtn5.apps.googleusercontent.com"
        buttonText="Log In with Google"
        onSuccess={(response) => onSuccess(response)}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
        <ToastContainer />
    </>
  );
};

export const GoogleLogoutAuthentication = () => {
  const logOut = () => {
    sessionStorage.clear();
    window.location.reload();
  };
  return (
    <>
      <GoogleLogout
        clientId="761244506200-rc4j7j8tgo1eqhn1eo8k64b033quqtn5.apps.googleusercontent.com"
        buttonText="Log out"
        onLogoutSuccess={logOut}
      />
    </>
  );
};
