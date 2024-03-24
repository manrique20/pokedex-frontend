import "./LoginScreen.css";
import Header from "../Molecule/Header/Header";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const LoginScreen = () => {
  const [body, setBody] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const inputChange = ({ target }) => {
    const { name, value } = target;
    setBody({
      ...body,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!body.email || !body.password) {
      toast.error("Todos los campos son requeridos");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:3001/users/login",
        body
      );
      const { token } = response.data;

      localStorage.setItem("token", token);

      toast.success("Logged succesfully");

      navigate("/");
    } catch (err) {
      toast.error(err?.response?.data?.message || "Error al iniciar sesión");
    }
  };

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
                label="Email"
                name="email"
                required=""
                value={body.email}
                onChange={inputChange}
              />
              <label>Email</label>
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
            <a href="/" title="Home" onClick={onSubmit}>
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
