import Header from "../Molecule/Header/Header";
import "./SignupScreen.css";
const SignupScreen = () => {
  return (
    <>
      <Header />
      <div className="body-signup">
        <div className="Signup-box">
          <h2>Registration</h2>
          <form>
            <div className="new-user-box">
              <input type="text" name="" required="" />
              <label>Username</label>
            </div>
            <form />
            <form />
            <div className="password-box">
              <input type="password" name="" required="" />
              <label>Password</label>
            </div>
            <div className="confirm-password-box">
              <input type="password" name="" required="" />
              <label>Confirm Password</label>
            </div>
            <a href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </a>
        <div className="charmander-container">
          <img
          className="charmander-gif"
          src="https://64.media.tumblr.com/09b95354d05af9c6c1f949299407736a/tumblr_obyyu1lt1j1qk9nv0o1_640.gif"
          alt="charmander"
          />
        </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupScreen;
