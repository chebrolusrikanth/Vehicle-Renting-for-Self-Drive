import './LoginPage.css'
import React from 'react';
import Button from 'react-bootstrap/Button';

function LoginPage(){
    return( 
        <div className="container">
             <div id='left'>
                <div id='image'>
                <img src='https://www.drivespark.com/img/2024/02/upcoming-4-new-car-launches-in-india-1708802947-20240225052206.jpg' style={{ width: '600px', height: '400px',}}></img>
                </div>
                </div>
              <div id='right'>
                <div className='outter'>
                    <h4>Wellcome to our website</h4><br></br>
                    <center>
              <input type="Text" placeholder='Email address or phone number'></input><br></br><br></br>
            <input type="password" placeholder='Password'></input><br></br><br></br>
            
            
           <Button variant="primary">Login</Button>{' '}
            <p>Forgot login? Sign up</p></center>
            </div>
        </div>
        </div>
        
    );
};

export default LoginPage;