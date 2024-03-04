import './ForgotPage.css'
import Button from 'react-bootstrap/Button';
import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import OtpValidation from './OtpValidation';

function ForgotPage(){
    let [email,setemail]=useState('');
    let senddata=()=>{
        <OtpValidation/>
        axios.post('http://127.0.0.1:8000/firstapp/forgot/',{'email':email}).then((resp)=>{
        console.log(resp)
    }).catch((error)=>{
        console.log(error)
    });
    }
    return(
        <div id="container-1">
            <h3>Find Your Account</h3>
            <hr></hr>
            <form >
            <p>Please enter your email address or mobile number to search <br></br>for your account</p>
            <input type="text" placeholder="Email address" onChange={(event)=>setemail(event.target.value)}></input>
            <hr></hr>
            <div id='buttons'>
            <Button variant="secondary">Cancle</Button>{' '}
            <Button variant="primary" onClick={senddata}>Search</Button>{' '}
            </div></form>
            </div>
    );
};

export default ForgotPage;