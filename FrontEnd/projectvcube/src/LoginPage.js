import './LoginPage.css'
import React from 'react';
import Button from 'react-bootstrap/Button';

function LoginPage(){
    return(
        
            <div className="outter">
            <h3>Welcome to our Website</h3><br></br>
        <div className="inner">
            <div id="inputbuttons">
            <input type="Text" placeholder='Email address or phone number'></input><br></br><br></br>
            <input type="password" placeholder='Password'></input><br></br><br></br>
            </div>
            
            <Button variant="primary">Submit</Button>{' '}
            <p>Forgot login? Sign up</p>
        </div>
        </div>
        
    );
};

export default LoginPage;