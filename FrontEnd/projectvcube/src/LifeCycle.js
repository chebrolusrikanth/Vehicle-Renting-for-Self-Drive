import { useState,useEffect } from "react";

function Display(){
    return(
        <div>
            <h1>Boom Boom Budak</h1>
        </div>
    );
};


function LifeCycle(){
    let [show,setshow]=useState(false);
    let changeshow=()=>{
        if (show==true){
            setshow(false);
        }
        else{
            setshow(true);
        }
    }
    useEffect(()=>{
        console.log('use effect is called')
    },[show]);
    return(
        <div className="lifecycleapp">
            <button onClick={changeshow}>Hide/Show</button>
            {show? <Display />:""}

        </div>
    );
};

export default LifeCycle;