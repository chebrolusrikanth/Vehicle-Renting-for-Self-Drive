import myImage from './images/Logo.jpg';


function AboutUS(){
    return(
        <>
        <div>
         <center>
            <img src={myImage} style={{height:'500px',width:'500px'}}></img>
            </center></div>
    <div style={{height:'150px',width:'90%',border:'solid 3px #3C009d',marginLeft:'5%',padding:'10px',borderRadius:'5px'}}><p><center>
    <h2>About Us</h2>
      Welcome to our vehicle rental service!We aim to provide convenient and reliable transportation solutions for our customers.
      Our fleet includes a variety of vehicles to suit your needs, whether it's for a family vacation, business trip, or special occasion.
      Customer satisfaction is our top priority, and we strive to deliver exceptional service with every rental.</center></p>
      </div>
      </>
    );
};

export default AboutUS;