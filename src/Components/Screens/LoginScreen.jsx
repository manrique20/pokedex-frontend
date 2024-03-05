import "./LoginScreen.css";
import Header from "../Molecule/Header/Header";

const LoginScreen = () => {
  return (
    <>
      <Header />
      <div className="body-login">
        <div className="login-box">
          <h2>Login</h2>
          <form>
            <div className="user-box">
              <input type="text" name="" required="" />
              <label>Username</label>
            </div>
            <form />
            <form />
            <div className="password-box">
              <input type="password" name="" required="" />
              <label>Password</label>
            </div>
            <a href="#">
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
