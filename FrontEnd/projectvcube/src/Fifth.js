import './Fifth.css'
import { useState } from 'react';

function Fifth(){
    let [data,setdata]=useState("");
    let readData=(event)=>{
        setdata(event.target.value);

    };
    return(

        <div className="fifthapp">
            <input type="text" onChange={readData}/>
            <h1>{data}</h1>
        </div>
    );
};

export default Fifth;