import CreatePost from './CreatePost';
import './AvailableVehicles.css'
import { useState,useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function AvailableVehicles(){
    let [sub,setsub]=useState(false);
    let [data,setdata]=useState([]);
    let [cardata,setcardata]=useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/getbikepost/')
            .then((resp) => {
                setdata(resp.data);
            })
            .catch((error) => console.log(error));

        axios.get('http://127.0.0.1:8000/api/getcarpost/')
            .then((resp) => {
                setdata(data=>[...data,...resp.data]);
            })
            .catch((error) => console.log(error));
    }, []);


    if(sub){
        return <CreatePost/>;
    }
    return(
       <div className="veh">
        <center>
       <Button variant="info" onClick={()=>{setsub(true)}}>Create Post</Button>{' '}
       </center><br/><br/>
       {data.length === 0 && <h2>No vehicles are available for rent 😕</h2>}
       {data.map((obj)=>{
        return <><Card style={{ width: '18rem',height:'400px',float:'left',marginLeft:'15px' }}>
        <Card.Img variant="top" src={obj.photo_1} style={{height:"210px"}}/>
        <Card.Body>
          <Card.Title>{obj.company}</Card.Title>
          <Card.Text>
            {obj.Description}
          </Card.Text>
          <Button variant="primary">Book Now</Button>
        </Card.Body>
      </Card></>
       })}
       </div>
    );
};

export default AvailableVehicles;