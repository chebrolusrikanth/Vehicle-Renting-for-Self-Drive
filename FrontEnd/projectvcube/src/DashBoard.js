import './DashBoard.css';
import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

function DashBoard(){
  const {userData}=useContext(AuthContext);
    return (
            <div className="dashboard"><center>
            <h1>DashBoard</h1>
            <h2>Welcome, {userData.last_name}</h2>
            </center>
            </div>
      );
    }
export default DashBoard;