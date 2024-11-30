import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { RotateRightRounded } from "@mui/icons-material";
import FacebookLogin from "react-facebook-login";
import { useHistory } from "react-router-dom"

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);
  const history = useHistory();

  const handleRegisterClick = () => {
    history.push("/register"); 
  };

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  // Callback for Facebook login success
  const responseFacebook = (response) => {
    console.log("Facebook Login Response:", response);
    if (response.accessToken) {
      // Dispatch or handle login with Facebook token
      loginCall({ facebookToken: response.accessToken }, dispatch);
    }
  };

  const handleTwitterLogin = () => {
    // Placeholder for Twitter login logic
    console.log("Twitter Login Clicked");
    // Add logic for Twitter OAuth here
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">BGSE</h3>
          <span className="loginDesc">
            Connect with friends on Facebook and X here in BGSE :)
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <RotateRightRounded color="white" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton" onClick={handleRegisterClick}>Register Now</button>

            <div className="socialLogin">
              <FacebookLogin
                appId="YOUR_FACEBOOK_APP_ID" // Replace with your Facebook App ID
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook}
                cssClass="facebookButton"
                textButton="Login with Facebook"
              />
              <button className="twitterButton" onClick={handleTwitterLogin}>
                Login with Twitter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
