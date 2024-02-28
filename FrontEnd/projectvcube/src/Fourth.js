import { useState } from 'react';
import './Fourth.css'


function SubFourth(){
    return(
        <div>
            <h1>I am a subcomponent</h1>
        </div>
    );
};

function Fourth(){
    let [x,setx]=useState(0);
    let show=true;
    let increment =()=>{
        setx(x+1);
    };
    let decrement =()=>{
        setx(x-1);
    };

    return (
        <div className="fourthapp">
            <h1>{x}</h1>
            <button onClick={ increment }>+</button>
            <button onClick={ decrement }>-</button>
        </div>
    );
};

export default Fourth;