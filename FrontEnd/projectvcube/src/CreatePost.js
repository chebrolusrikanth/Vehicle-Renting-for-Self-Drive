import React from "react";
import './CreatePost.css';
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import axios from "axios";
import AvailableVehicles from "./AvailableVehicles";


function CreatePost(){
    const [iscar,setiscar]=useState(true);
    const [selectedcar,setselectedcar]=useState("");
    const [selectedbike,setselectedbike]=useState("");
    const [selectedtype,setselectedtype]=useState("");
    const [city,setcity]=useState("");
    const [Registrationno,setRegistrationno]=useState("");
    const [vehiclerc,setvehiclerc]=useState(null);
    const [image1,setimage1]=useState(null);
    const [image2,setimage2]=useState(null);
    const [image3,setimage3]=useState(null);
    const [Desc,setDesc]=useState("");
    const [cpost,setcpost]=useState(false);

    const carform = new FormData();
    carform.append("company",selectedcar);
    carform.append("vehicle_type", selectedtype);
    carform.append("area", city);
    carform.append("Registrationno", Registrationno);
    carform.append("vehicle_RC", vehiclerc);
    carform.append("photo_1", image1);
    carform.append("photo_2", image2);
    carform.append("photo_3", image3);
    carform.append("Description", Desc);        
        
    const bikeform = new FormData();
    bikeform.append("company",selectedbike);
    bikeform.append("area", city);
    bikeform.append("Registrationno", Registrationno);
    bikeform.append("vehicle_RC", vehiclerc);
    bikeform.append("photo_1", image1);
    bikeform.append("photo_2", image2);
    bikeform.append("photo_3", image3);
    bikeform.append("Description", Desc);

    const handleonclick=()=>{
        if (iscar){
       axios.post("http://127.0.0.1:8000/firstapp/carpost/",carform).then((resp)=>{
        alert("Post is created Sucessfully")
        setcpost(true);
       })
       .catch((error)=>{
        alert("Something went worng or registartionNo allready existing with us\uD83D\uDE15")
       });
    }
       else{
        axios.post("http://127.0.0.1:8000/firstapp/bikepost/",bikeform).then((resp)=>{
        alert("Post is created Sucessfully")
        setcpost(true);
       })
       .catch((error)=>{
        alert("Something went worng or registartionNo allready existing with us\uD83D\uDE15")
       });
    }
    }
    const bikeclick=()=>{
        setiscar(false);
    }
    const carclick=()=>{
        setiscar(true);
    }
    if(cpost){
        return <AvailableVehicles/>;
    }
    
    return(
        <div className="carcontent">
            {iscar ?(
            <div>         
            <label>Car Brand:</label>
            <select id="car" name="car" onChange={(event)=>{setselectedcar(event.target.value)}} value={selectedcar}>
            <option value="" disabled>Select Brand</option>
            <option value={"Ford"}>Ford</option>
            <option value={"Volva"}>volvo</option>
            <option value={"Honda"}>Honda</option>
            <option value={"Hyundai"}>Hyundai</option>
            <option value={"Kia"}>kia</option>
            <option value={"Mahindra"}>Mahindra</option>
            <option value={"Maruti"}>Maruti</option>
            <option value={"Renault"}>Renault</option>
            <option value={"Tata"}>Tata</option>
            <option value={"Toyota"}>Toyota</option>
            <option value={"Volkswagen"}>Volkswagen</option>
            </select><br></br><br></br>
            <label>Type:</label>
            <select id='type' name='type' onChange={(event)=>{setselectedtype(event.target.value)}} value={selectedtype}>
                <option value="" disabled>Select Type</option>
                <option value={"Diesel"}>Diesel</option>
                <option value={"Petrol"}>Petrol</option>
            </select><br></br><br></br>
            </div> 
            ):(
            <div>
            <label>Bike Brand:</label>
            <select id="bike" name="bike" onChange={(event)=>{setselectedbike(event.target.value)}} value={selectedbike}>
            <option value="" disabled>Select Brand</option>
            <option value={"Bajaj"}>Bajaj</option>
            <option value={"Hero_Motor"}>Hero Motor</option>
            <option value={"Honda"}>Honda</option>
            <option value={"Kawasaki"}>Kawasaki</option>
            <option value={"KTM"}>KTM</option>
            <option value={"Royal_Enfield"}>Royal Enfield</option>
            <option value={"Suzuki"}>Suzuki</option>
            <option value={"TVS_Motor"}>TVS Motor</option>
            <option value={"Yamaha"}>Yamaha</option>
            </select><br></br><br></br>
            </div>   
            )}
            <input type="text" placeholder="Enter Your city" onChange={(event)=>{setcity(event.target.value)}}/><br></br><br></br>
            <input type="text" placeholder="Registration No" onChange={(event)=>{setRegistrationno(event.target.value)}}/><br></br><br></br>
            <label>Vehicle RC</label><br></br>
            <input type="file" name="RCphoto" accept="image/*" onChange={(event)=>{setvehiclerc(event.target.files[0])}}/><br></br>
            <label>Vehicle Images</label>
            <input type="file" name="pic1" accept="image/*" onChange={(event)=>{setimage1(event.target.files[0])}}/><br></br>
            <input type="file" name="pic2" accept="image/*" onChange={(event)=>{setimage2(event.target.files[0])}}/><br></br>
            <input type="file" name="Pic3" accept="image/*" onChange={(event)=>{setimage3(event.target.files[0])}}/><br></br> 
            <input type="text" placeholder="Describe your car in 300 words" onChange={(event)=>setDesc(event.target.value)} style={{height:'100px'}}/><br></br><br></br>

            <ButtonGroup aria-label="Basic example" style={{width:"80%"}}>
            <Button  onClick={carclick} variant="outline-primary" className={iscar ? "active" : ""} >Cars</Button>
            <Button  onClick={bikeclick} variant="outline-primary" className={!iscar ? "active" : ""}>Bikes</Button>
            </ButtonGroup> <br/><br/>
            <Button style={{width:"80%"}} onClick={handleonclick}>Submit</Button>           
        </div>
    );
};
export default CreatePost;