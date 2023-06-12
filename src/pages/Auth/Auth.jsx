import React, { useState } from "react";
import Hexagons from "../../components/Hexagons/Hexagons";
import animation1 from "../../assets/Lottie/animation1.json"
import animation2 from "../../assets/Lottie/animation2.json"
import Lottie from "lottie-react";
import "./Auth.css";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [codeLogin,setCodeLogin] = useState(false);
  const toogleLogin = () => {
    setIsLogin((prev) => !prev);
  };
  const toogleCodelogin = ()=>{
    setCodeLogin(prev=>!prev);
  }
  return (
    <div className="auth">
      <Hexagons />
      <div className="auth_contents">
        <div className="left">
          <h1>LinkVaut</h1>
          <div className="anim_contain">
            <Lottie animationData={isLogin?animation1:animation2} style={{width: "100%"}}/>
          </div>
        </div>
        <div className="right">
        <h1 className="right_branding">LinkVaut</h1>
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

              {!codeLogin && <form action="" className="auth_form">
                <p>Email address</p>
                <input type="text" className="inputfield" />
                <p>Password</p>
                <input type="password" className="inputfield" />
                <p className="access_code">
                  use <span className="toogle_login" onClick={toogleCodelogin}>Access code</span>
                </p>
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
              </form>}

              <div className="code_input_contain">
                
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
