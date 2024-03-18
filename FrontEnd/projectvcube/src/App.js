import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
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
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faSignInAlt,faSignOutAlt,faInfoCircle, faAddressCard, faCar,faTachometerAlt  } from '@fortawesome/free-solid-svg-icons';
import AvailableVehicles from './AvailableVehicles';
import AboutUS from './AboutUS';
import ContactUs from './ContactUs';
import DashBoard from './DashBoard';
import FullDetails from './FullDetails';

function App() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div  className="App">
       <Router>
      <Navbar expand="lg" bg="dark" data-bs-theme="light" className="bg-body-tertiary" style={{borderRadius:'5px'}}>
      <Container>
      <FontAwesomeIcon icon={faHome} />&nbsp;&nbsp;
      <span style={{color:"black",fontWeight:"bold"}}>
      <Navbar.Brand href=""><Link to="/Home">Home</Link></Navbar.Brand>
      <FontAwesomeIcon icon={faCar} />&nbsp;&nbsp;
      <Navbar.Brand href=""><Link to="/availablevehicles">Vehicles</Link></Navbar.Brand>
      <FontAwesomeIcon icon={faInfoCircle} />&nbsp;&nbsp;
      <Navbar.Brand href=""><Link to="/aboutus">About Us</Link></Navbar.Brand>
      <FontAwesomeIcon icon={faAddressCard} />&nbsp;&nbsp;
      <Navbar.Brand href=""><Link to="/contactus">Contact Us</Link></Navbar.Brand>

      {!isLoggedIn && <>
      <FontAwesomeIcon icon={faSignInAlt} />&nbsp;&nbsp;
      <Navbar.Brand href=""><Link to="/login">Login</Link></Navbar.Brand></>}

      {isLoggedIn && <>
      <FontAwesomeIcon icon={faTachometerAlt} />
      <Navbar.Brand href=""><Link to="/dashboard">DashBoard</Link></Navbar.Brand></>}

      {isLoggedIn && <>
      <FontAwesomeIcon icon={faSignOutAlt} />&nbsp;&nbsp;
      <Navbar.Brand href=""><Link to="/logout">Logout</Link></Navbar.Brand></>}
      </span>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">  
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Link to="/"></Link>
        <Routes>
        <Route path="/Home" element={<First />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/forgotpassword" element={<ForgotPage />}></Route>
        <Route path="/otpValidation" element={<OtpValidation />}></Route>
        <Route path="/logout" element={<LogoutPage />} ></Route>
        <Route path="/successotp" element={<SuccessOtp />}></Route>
        <Route path="/aboutus" element={<AboutUS />}></Route>
        <Route path="/availablevehicles" element={<AvailableVehicles/>}></Route>
        <Route path="/contactus" element={<ContactUs/>}></Route>
        <Route path="/dashboard" element={<DashBoard/>}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
