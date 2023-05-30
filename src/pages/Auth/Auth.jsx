import React, { useState } from "react";
import Hexagons from "../../components/Hexagons/Hexagons";
import "./Auth.css";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const toogleLogin = () => {
    setIsLogin((prev) => !prev);
  };
  return (
    <div className="auth">
      <Hexagons />
      <div className="auth_contents">
        <div className="left">
          <h1>LinkVaut</h1>
        </div>
        <div className="right">
          <div className="login_card">
            <div className="card_braces">
              <div className="card_header">
                <h1>{isLogin ? "Login" : "Signup"}</h1>
                <p>
                  {isLogin
                    ? "Sign in to your account to continue"
                    : "Create your new account"}
                </p>
              </div>

              <form action="" className="auth_form">
                <p>Email address</p>
                <input type="text" className="inputfield" />
                <p>Password</p>
                <input type="password" className="inputfield" />
                <input
                  type="submit"
                  value={isLogin ? "Sign in" : "Register"}
                  className="submit_btn"
                />
                <div className="auth_prompt">
                  <p>{isLogin ? "New here? " : "Already have an account? "}</p>
                  <p onClick={toogleLogin} className="toogle_login">
                    {isLogin ? "Create Account" : "Signin"}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
