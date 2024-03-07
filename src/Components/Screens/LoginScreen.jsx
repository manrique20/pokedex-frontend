import "./LoginScreen.css";
import Header from "../Molecule/Header/Header";
import { useState } from "react";

const LoginScreen = () => {
  const [body, setBody] = useState({ username: "", password: "" });

  const inputChange = ({ target }) => {
    const { name, value } = target;
    setBody({
      ...body,
      [name]: value
    });
  };

  const onSubmit=()=>{
    console.log(body);
  }

  return (
    <>
      <Header />
      <div className="body-login">
        <div className="login-box">
          <h2>Login</h2>
          <form>
            <div className="user-box">
              <input
                type="text"
                label="Username"
                name="username"
                required=""
                value={body.username}
                onChange={inputChange}
              />
              <label>Username</label>
            </div>
            <form />
            <form />
            <div className="password-box">
              <input
                type="password"
                required=""
                label="Password"
                value={body.password}
                onChange={inputChange}
                name="password"
              />
              <label>Password</label>
            </div>
            <a href="#" onClick={onSubmit}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </a>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
