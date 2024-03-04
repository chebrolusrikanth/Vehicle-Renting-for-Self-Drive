import './OtpValidation.css'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';

function OtpValidation(){
    let [otp,setotp]=useState('');
    let senddata=()=>{
     axios.post('http://127.0.0.1:8000/firstapp/otpvalidation/',{'otp':otp}).then((resp)=>{
        console.log(resp);
     }).catch((error)=>{
        console.log(error);
     });
    }

    return(
<div>
<div id="container">
           <center>
            <h3>Valiadate your OTP</h3>
            </center>
            <hr></hr>
            <form >
            <center>
            <input type="text" placeholder="Enter here" onChange={(event)=>setotp(event.target.value)}></input>
            <hr></hr>
            </center>
            <div id='buttons'>
            <Button variant="primary" type='submit' onClick={senddata}>Submit</Button>{' '}
            </div></form>
            </div>
</div>
    );
};

export default OtpValidation