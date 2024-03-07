
import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import SignUp from './SignUp';
import LoginPage from './LoginPage';
import ForgotPage from './ForgotPage';
import First from './First';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import OtpValidation from './OtpValidation';
import LogoutPage from './LogoutPage';
import SuccessOtp from './SuccessOtp';

function App() {
  return (
    <div className="App">
       <Router>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href=""><Link to="/login">Login Page</Link></Navbar.Brand>
        <Navbar.Brand href=""><Link to="/logout">Logout</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">  
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Link to="/"></Link>
        <Routes>
        <Route path="/" element={<First />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/forgotpassword" element={<ForgotPage />}></Route>
        <Route path="/otpValidation" element={<OtpValidation />}></Route>
        <Route path="/logout" element={<LogoutPage />} ></Route>
        <Route path="/successotp" element={<SuccessOtp />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
