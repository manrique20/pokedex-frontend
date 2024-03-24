import { Navbar } from "react-bootstrap";
import { Route } from "react-router-dom";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import HomeScreen from "./Components/Screens/HomeScreen";
import LoginScreen from "./Components/Screens/LoginScreen";
import SignupScreen from "./Components/Screens/SignupScreen";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Importa el CSS aquí


const App = () => {
  return (
    <>
      <div className="">
        <Router>
          <Navbar />
          <Routes>
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
