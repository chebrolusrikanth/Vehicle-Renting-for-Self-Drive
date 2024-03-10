import './LoginPage.css'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import DashBoard from './DashBoard';

function LoginPage() {
  const [emailphone, setEmailPhone] = useState("");
  const [password, setPassword] = useState("");
  const [emailphoneError, setEmailPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    let isValid = true;

    if (!emailphone) {
      setEmailPhoneError("Email address or phone number is required");
      isValid = false;
    } else {
      setEmailPhoneError("");
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      logindata();
    }
  };

  const logindata = () => {
    axios.post('http://127.0.0.1:8000/firstapp/login/', {
      'emailphone': emailphone,
      'password': password,
    }).then((resp) => {
      setSubmitted(true);
    }).catch((error) => {
      alert('Account Not Found\uD83D\uDE15');
    });
  };

  if (submitted) {
    return <DashBoard />;
  }

  return (
    <div className="container">
      <div className="outter">
        <center>
          <h3 style={{color:"#3C009d"}}>Login</h3><br></br>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Email address or phone number' onChange={(event) => setEmailPhone(event.target.value)} />
            {emailphoneError && <div className="error">{emailphoneError}</div>}<br></br><br></br>
            <input type="password" placeholder='Password' onChange={(event) => setPassword(event.target.value)} />
            {passwordError && <div className="error">{passwordError}</div>}
            <br></br><br></br>
            <Button variant="primary" type="submit">Login</Button>
          </form>
          <a href='http://localhost:3000/signup'><p>Sign up</p></a>
          <a href='http://localhost:3000/forgotpassword'><p>Forgot Password?</p></a>
        </center>
      </div>
    </div>
  );
}

export default LoginPage;
