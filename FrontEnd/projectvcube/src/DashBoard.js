import './DashBoard.css';
import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

function DashBoard(){
  const {userData}=useContext(AuthContext);
    return (
            <div className="dashboard"><center>
            <span style={{color:'#3C009d'}}><h1>DashBoard</h1>
            <h2>Welcome, {userData.last_name}</h2></span></center>
            </div>
    );    
    }
export default DashBoard;