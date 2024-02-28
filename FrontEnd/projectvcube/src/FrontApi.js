import { useEffect,useState} from "react";
import axios from "axios";
import './FrontApi.css';

function FrontApi(){
    let [pno,setpno]=useState(1);
    let [data,setdata]=useState([]);
    let perpage=2
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/').then((resp)=>{
            setdata(resp.data)
        }).catch((error)=>console.log(error));
    },[]);
    return(
        <div className="frontapi">
            <table border="1" cellSpacing="0" >
            {data.slice(pno*perpage-perpage,pno*perpage).map((obj)=>{
                return <tr> <td>{obj.empno}</td><td>{obj.empname}</td><td>{obj.salary}</td></tr>
            })}
        </table>
        <button onClick={()=> setpno(pno-1)}>Previous</button>
        {pno}
        <button onClick={()=> setpno(pno+1)}>Next</button>
        </div>
    );
};

export default FrontApi;