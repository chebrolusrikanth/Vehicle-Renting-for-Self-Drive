import CreatePost from './CreatePost';
import './AvailableVehicles.css'
import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

function AvailableVehicles(){
    let [sub,setsub]=useState(false);
    let post=()=>{
        setsub(true);
    }
    if(sub){
        return <CreatePost/>;
    }
    return(
       <div className="veh">
        <center>
       <Button variant="info" onClick={post}>Create Post</Button>{' '}
       </center>
       </div>
    );
};

export default AvailableVehicles;