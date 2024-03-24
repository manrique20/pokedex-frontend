import { useNavigate } from "react-router";
import Header from "../Molecule/Header/Header";
import "./SignupScreen.css";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const SignupScreen = () => {
  const [body, setBody] = useState({ nombre: "", email: "", password: "" });
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
    
    try {
      const response = await axios.post(
        "http://localhost:3001/users/signup",
        body
      );
      const { token } = response.data;

      localStorage.setItem("token", token);

      toast.success("User created succesfully");

      navigate("/");
    } catch (err) {
      toast.error(err?.response?.data?.message || "Sign up error")
    }
  };

  return (
    <>
      <Header />
      <div className="body-signup">
        <div className="Signup-box">
          <h2>Registration</h2>
          <form>
            <div className="new-user-box">
              <input
                type="text"
                label="Nombre"
                name="nombre"
                required=""
                value={body.nombre}
                onChange={inputChange}
              />
              <label>Name</label>
            </div>
            <form />
            <div className="password-box">
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
            <div className="confirm-password-box">
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
            <img
              className="charmander-gif"
              src="https://64.media.tumblr.com/09b95354d05af9c6c1f949299407736a/tumblr_obyyu1lt1j1qk9nv0o1_640.gif"
              alt="charmander"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupScreen;
