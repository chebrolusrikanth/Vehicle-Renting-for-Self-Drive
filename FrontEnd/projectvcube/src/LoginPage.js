import './LoginPage.css'
import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function LoginPage(){
  let [emailphone,setemailphone]=useState("");
  let [password,setpassword]=useState("");
  let logindata=()=>{
    axios.post('http://127.0.0.1:8000/firstapp/login/',{'emailphoneno':emailphone,'password':password},
    ).then((resp)=>{
     console.log(resp)
  }).catch((error)=>{
      console.log(error.response.data) 
  });
  };
    return( 
          <div className="container">
          <div className='outter'>
            <center>
            <h3>Login</h3><br></br>
            <form >
            <input type="Text" placeholder='Email address or phone number' onChange={(event)=>setemailphone(event.target.value)}></input><br></br><br></br>
            <input type="password" placeholder='Password' onChange={(event)=>setpassword(event.target.value)}></input><br></br><br></br>
           <Button variant="primary" onClick={logindata}>Login</Button>{' '}
           </form>
           <br></br>
           <a href='http://localhost:3000/signup'><p>sign up</p></a>
           <a href='http://localhost:3000/forgotpassword'><p>Forgot Password?</p></a>
           </center>
              </div>
            </div>
      
       
        
    );
};

export default LoginPage;