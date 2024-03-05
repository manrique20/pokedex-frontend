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
        </form>
      </div>
    </div>
    </>
  );
};

export default SignupScreen;
