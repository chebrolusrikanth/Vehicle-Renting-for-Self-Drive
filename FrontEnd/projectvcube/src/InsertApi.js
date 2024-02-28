import { useState } from "react";
import axios from "axios";

function InsertApi(){
    let [empno,setempno]=useState(0);
    let [empname,setempname]=useState('');
    let [salary,setsalary]=useState(0);

    let insertdata=()=>{
        axios.post('http://127.0.0.1:8000/api/',{"empno":empno,"empname":empname,"salary":salary}).then((resp)=>{
            console.log(resp);
        }).catch((error)=>{
            console.log(error);
        });
    }
    return(

        <div>
            <form onSubmit={insertdata}>
                Empno:<input type="text" onChange={(event)=>setempno(event.target.value)}></input><br/><br/>
                Empname:<input type="text" onChange={(event)=>setempname(event.target.value)}></input><br/><br/>
                salary:<input type="text" onChange={(event)=>setsalary(event.target.value)}></input><br/><br/>
                <button type="submit">Insert</button>
            </form>
        </div>

    );
};
export default InsertApi;