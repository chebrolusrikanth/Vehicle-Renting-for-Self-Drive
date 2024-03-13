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
    let [selectedType, setselectedType] = useState('');
    let [selectbrand,setselectbrand]=useState('');
    
    const onfilter= async() =>{
       try {
           const filterdata = await axios.post('http://127.0.0.1:8000/api/filtering/',{'type':selectedType,'company':selectbrand});
           setdata(filterdata.data);
       } catch(error){
        alert('No DataFound');
       };
        setselectedType('');
        setselectbrand('');
    };

    const handleChange = (event) => {
            setselectedType(event.target.value)
            };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const bikeResponse = await axios.get('http://127.0.0.1:8000/api/getbikepost/');
                const carResponse = await axios.get('http://127.0.0.1:8000/api/getcarpost/');
                setdata(prevData => [...bikeResponse.data, ...carResponse.data]);
            } catch (error) {
                console.log(error);
            }
        };
    
        fetchData();
    }, []);
    

    if(sub){
        return <CreatePost/>;
    }
    return(
       <div className="veh">
        <center>
       <Button variant="info" onClick={()=>{setsub(true)}} style={{margin:'10px',borderRadius:'5px',width:'98%',height:'50px'}}>Create Post</Button>{' '}
       <label><b>Select Type:</b></label>
            <select id="type" name="type" style={{width:'30%',height:'30px'}} onChange={handleChange}>
            <option value="">Select</option>
                <option value="car">car</option>
                <option value="bike">Bike</option>
            </select>
            {selectedType && (
                <>
                    &nbsp;&nbsp;<label><b>Select Brand:</b></label>
                    <select id="brand" name="brand" style={{width:'30%',height:'30px'}} onChange={(event)=>{setselectbrand(event.target.value)}}>
                        <option value="" >Select Brand</option>
                        {selectedType === 'car' ? (
                            <>
                                <option value="Ford">Ford</option>
                                <option value="Volvo">Volvo</option>
                                <option value="Honda">Honda</option>
                                <option value="Hyundai">Hyundai</option>
                                <option value="Kia">Kia</option>
                                <option value="Mahindra">Mahindra</option>
                                <option value="Maruti">Maruti</option>
                                <option value="Renault">Renault</option>
                                <option value="Tata">Tata</option>
                                <option value="Toyota">Toyota</option>
                                <option value="Volkswagen">Volkswagen</option>
                            </>
                        ) : selectedType === 'bike' ? (
                            <>
                                <option value="Bajaj">Bajaj</option>
                                <option value="Hero_Motor">Hero Motor</option>
                                <option value="Honda_Bike">Honda</option>
                                <option value="Kawasaki">Kawasaki</option>
                                <option value="KTM">KTM</option>
                                <option value="Royal_Enfield">Royal Enfield</option>
                                <option value="Suzuki">Suzuki</option>
                                <option value="TVS_Motor">TVS Motor</option>
                                <option value="Yamaha">Yamaha</option>
                            </>
                        ) : null}
                    </select>
                </>
            )}
            &nbsp;&nbsp;<Button variant="success" onClick={onfilter} >Search</Button>
       </center><br/><br/>
       
       {data.length === 0 && <h2>No vehicles are available for rent 😕</h2>}
       {data.map((obj)=>{
        return <><Card style={{ width: '18rem',height:'400px',float:'left',marginLeft:'15px',marginBottom:'15px' }}>
        <Card.Img variant="top" src={obj.photo_1} style={{height:"210px"}}/>
        <Card.Body>
          <Card.Title>{obj.company}</Card.Title>
          <Card.Text>
            <b>Location:</b>{obj.area}<br/>
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
