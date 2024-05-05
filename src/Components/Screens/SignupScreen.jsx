import { useNavigate } from "react-router";
import Header from "../Molecule/Header/Header";
import "./SignupScreen.css";
import axios from "axios";
import { toast } from "react-toastify";
import { Formik } from "formik";

const SignupScreen = () => {

  const navigate = useNavigate();

  return (

      <>
        <Header />
        <Formik
          initialValues={{
            nombre: "",
            email: "",
            password: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.nombre) {
              errors.nombre = "Please write your name";
            }
             else if (!values.email) {
              errors.email = "Please write your email";
            }
             else if (!values.password) {
              errors.password = "Please write your password";
            }
            return errors;
          }}
          onSubmit={async (values) => {
            try {
              const response = await axios.post(
                "http://localhost:3001/users/signup",
                values
              );
              const { token } = response.data;
  
              localStorage.setItem("token", token);
  
              toast.success("User created successfully");
  
              navigate("/");
            } catch (err) {
              toast.error(err?.response?.data?.message || "Sign up error");
            }
          }}
        >
          {({ handleBlur, values, errors, handleChange, handleSubmit }) => (
            <div className="body-signup">
              <div className="Signup-box">
                <h2>Registration</h2>
                <form onSubmit={handleSubmit}>
                  <div className="new-user-box">
                    <label htmlFor="nombre">Name</label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      value={values.nombre}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.nombre && (
                      <div className="error">{errors.nombre}</div>
                    )}
                  </div>
                  <div className="email-box">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && (
                      <div className="error">{errors.email}</div>
                    )}
                  </div>
                  <div className="password-box">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      required
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && (
                      <div className="error">{errors.password}</div>
                    )}
                  </div>
                <button type="submit" className="submit" title="Home">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Submit
                </button>
                <img
                  className="charmander-gif"
                  src="https://64.media.tumblr.com/09b95354d05af9c6c1f949299407736a/tumblr_obyyu1lt1j1qk9nv0o1_640.gif"
                  alt="charmander"
                />
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default SignupScreen;