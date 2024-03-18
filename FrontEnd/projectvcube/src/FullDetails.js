import axios from "axios";
import { useState,useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import './FullDetails.css';
import { Button } from "react-bootstrap";
import AvailableVehicles from "./AvailableVehicles";



function FullDetails({registrationNo,vehicleType}){
    const [detaildata, setdetaildata] = useState([]);
    const [backclick,setbackclick]=useState(false);

    useEffect(() => {
        const fetchFullDetails = async () => {
            try {
                console.log(vehicleType,registrationNo);
                const response = await axios.post('http://127.0.0.1:8000/api/fulldetails/', {
                    'reg_no': registrationNo,
                    'veh_type': vehicleType,
                });
                setdetaildata(response.data); 
            } catch (error) {
                alert('No data found');
                console.log(vehicleType,registrationNo);
            }
        };

        fetchFullDetails();
    }, [registrationNo, vehicleType]);
    if(backclick){
        return <AvailableVehicles/>
    }

    return(
        <div>
        <div className='corosol'>
        <Carousel style={{ maxWidth: '60%', maxHeight: '600px',position:'relative' }}>
          <Carousel.Item>
          <img
            className="d-block w-100"
            src={detaildata.photo_1}
            style={{ width: '600px', height: '600px',borderRadius: '5px'}} 
            alt='Not Found'
          />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img
            className="d-block w-100"
            src={detaildata.photo_2}
            style={{ width: '600px', height: '600px',borderRadius: '5px' }} 
            alt='Not Found'
          />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img
            className="d-block w-100"
            src={detaildata.photo_3}
            style={{ width: '600px', height: '600px',borderRadius: '5px' }} 
            alt='Not Found'
          />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>  
        </div>
        <div className="details">
          <h4>Company:{detaildata.company}</h4>
          <h4>Area:{detaildata.area}</h4>
          <h4>PhoneNo:{detaildata.phoneno}</h4>
          <h4>About:{detaildata.Description}</h4>
          <h4>RegistrationNo:{detaildata.Registrationno}</h4>
          {detaildata.vehicle_type && 
          <h4>Type:{detaildata.vehicle_type}</h4>}
        </div>
        <div className="backbutton">
        <Button variant="primary" onClick={()=>{setbackclick(true)}}>Back</Button>{' '}
            </div>
        </div>
    );
}

export default FullDetails;