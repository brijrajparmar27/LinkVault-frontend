import React, { useState } from "react";
import Hexagons from "../../components/Hexagons/Hexagons";
import animation1 from "../../assets/Lottie/animation1.json";
import landscape from "../../assets/Lottie/landscape.json";
import Lottie from "lottie-react";
import "./Auth.css";
import OTPInput from "react-otp-input";
import useAuth from "../../Hooks/useAuth";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [pinLogin, setpinLogin] = useState(false);
  const [pin, setPin] = useState("");
  const { loading, error, login, signin, clearError } = useAuth();

  const toogleLogin = () => {
    setIsLogin((prev) => !prev);
    clearError();
  };

  const tooglepinLogin = () => {
    setpinLogin((prev) => !prev);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (loading) return;
    const payload = {};
    if (pinLogin) {
      payload.pin = pin;
      payload.pinLogin = true;
    } else {
      payload.email = e.target.email.value.trim();
      payload.pass = e.target.password.value.trim();
      payload.pinLogin = false;
    }
    console.log("login");
    const user = await login(payload);
    if (user) {
      console.log(user);
    } else {
      console.log("login failed");
    }
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    if (loading) return;
    let payload = {};
    payload.email = e.target.email.value.trim();
    payload.pass = e.target.password.value.trim();
    payload.pin = "123";
    // payload.pass = e.target.pass.value.trim();
    const user = await signin(payload);
    console.log(user);
  };
  return (
    <div className="auth">
      <div className="left">
        <Lottie animationData={landscape} className="lottie_landscape"/>
      </div>
      <div className="right">
        <h1 className="right_branding">LinkVaut</h1>
        <div className="login_card">
          <div className="card_header">
            <h1>{isLogin ? "Login" : "Signup"}</h1>
            <p>
              {isLogin
                ? "Sign in to your account to continue"
                : "Create your new account"}
            </p>
          </div>

          {!pinLogin && (
            <form
              action=""
              className="auth_form"
              onSubmit={isLogin ? handleLogin : handleSignin}
            >
              <p>Email address</p>
              <input type="text" className="inputfield" name="email" />
              <p>Password</p>
              <input type="password" className="inputfield" name="password" />
              {isLogin && (
                <p className="access_code">
                  use{" "}
                  <span className="toogle_login" onClick={tooglepinLogin}>
                    Access code
                  </span>
                </p>
              )}
              {error && <p className="error">{error.message}</p>}
              <input
                type="submit"
                value={isLogin ? "Sign in" : "Next"}
                className="submit_btn"
                disabled={loading}
              />
              <div className="auth_prompt">
                <p>{isLogin ? "New here? " : "Already have an account? "}</p>
                <p onClick={toogleLogin} className="toogle_login">
                  {isLogin ? "Create Account" : "Signin"}
                </p>
              </div>
            </form>
          )}

          {pinLogin && (
            <form
              className="code_input_contain"
              onSubmit={isLogin ? handleLogin : handleSignin}
            >
              <p>Enter Access Code</p>
              <OTPInput
                value={pin}
                onChange={setPin}
                numInputs={5}
                inputStyle={"otpinput"}
                containerStyle={"otpcontain"}
                inputType={"number"}
                renderInput={(props) => <input {...props} />}
              />
              {isLogin && (
                <p className="access_code">
                  use{" "}
                  <span className="toogle_login" onClick={tooglepinLogin}>
                    Password
                  </span>
                </p>
              )}
              {error && <p className="error">{error.message}</p>}
              <input
                type="submit"
                value={isLogin ? "Sign in" : "Register"}
                className="submit_btn"
                disabled={loading}
              />
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
