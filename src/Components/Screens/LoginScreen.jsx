import "./LoginScreen.css";
import Header from "../Molecule/Header/Header";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { Formik } from "formik";

const LoginScreen = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Please write your email";
          }
          if (!values.password) {
            errors.password = "Please write your password";
          }
          return errors;
        }}
        onSubmit={async (values, { resetForm }) => {
          try {
            const response = await axios.post(
              "http://localhost:3001/users/login",
              values
            );

            const { token } = response.data;

            localStorage.setItem("token", token);

            const userInfoResponse = await axios.get(
              "http://localhost:3001/users"
            );

            const user = userInfoResponse.data.find(
              (user) => user.email === values.email
            );

            // Si se encuentra el usuario, obtén su ID y guárdalo en localStorage
            if (user) {
              localStorage.setItem("userId", user.id);
            }

            toast.success("Logged successfully");

            navigate("/", {
              replace: true,
              state: {
                logged: true,
              },
            });
          } catch (err) {
            toast.error(err?.response?.data?.message || "Error at login");
          }

          resetForm();
        }}
      >
        {({ values, errors, handleChange, handleSubmit, handleBlur }) => (
          <div className="body-login">
            <div className="login-box">
              <h2>Login</h2>
              <form onSubmit={handleSubmit}>
                <div className="user-box">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    required
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && <div className="error">{errors.email}</div>}
                </div>
                <form />
                <form />
                <div className="password-box">
                  <label>Password</label>
                  <input
                    type="password"
                    required=""
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                    name="password"
                    onBlur={handleBlur}
                  />
                  {errors.password && (
                    <div className="error">{errors.password}</div>
                  )}
                </div>
                <button className="loginButton" href="/" title="Home">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default LoginScreen;
