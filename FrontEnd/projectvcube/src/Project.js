
import './Project.css';
import { useState } from 'react';

function Project(){
    let [data,setdata]=useState("");
    let [items,setitems]=useState([]);
    let readdata =(event)=>{
        setdata(event.target.value);
    };
    let addItems=()=>{
        setitems([...items,data])
    };
    let deleteItem=(key)=>{
        let output=items.filter((it,k)=>{
            return k!=key
        });
        setitems(output)
    }
    

    return(
        <div className="projectapp">
            <div className="main">
            <input onChange={readdata}></input>
            <button onClick={addItems} >Add</button>

            </div>
            <div className="content">
                {
                    items.map((item,key)=>{
                        return <><h1>{item}</h1> <button onClick={()=>deleteItem(key)}>X</button></>
                    })
                }
            </div>

        </div>
    );
};


export default Project;