import { Navbar } from "react-bootstrap";
import { Navigate, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import HomeScreen from "./Components/Screens/HomeScreen";
import LoginScreen from "./Components/Screens/LoginScreen";
import SignupScreen from "./Components/Screens/SignupScreen";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Importa el CSS aquí
import MyTeam from "./Components/Screens/MyTeam";

const App = () => {
  const token = localStorage.getItem("token");
  return (
    <>
      <div className="">
        <Router>
          <Navbar />
          <Routes>
            {token ? (
              <Route path="/myteam" element={<MyTeam />} />
            ) : (
              <Route path="*" element={<Navigate to="/login" />} />
            )}
            <Route path="/" element={<HomeScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/signup" element={<SignupScreen />} />
          </Routes>
        </Router>
      </div>
      <ToastContainer />
    </>
  );
};

export default App;
