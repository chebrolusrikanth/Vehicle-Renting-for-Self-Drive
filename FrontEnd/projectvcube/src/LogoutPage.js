import React from 'react';
import axios from 'axios';
import './LogoutPage.css'

function handleLogout() {
    axios.get('http://127.0.0.1:8000/firstapp/logout/')
        .then(response => {
            alert('Logout successful');
            window.location.href = '/login';
        })
        .catch(error => {
            console.error('Logout failed', error);
        });
}

function LogoutButton() {
    return (
        <div id='logoubutton'>

        <h3>Are you sure to log out?</h3>      
        <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default LogoutButton;