import Card from 'react-bootstrap/Card';
import { Envelope } from 'react-bootstrap-icons';

function ContactUs(){
        return (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5%' }}>
              <div style={{ marginRight: '20px' }}>
                <Card
                  bg="light"
                  text="dark"
                  style={{ width: '400px', height: '200px' }}
                  className="mb-2"
                >
                  <center>
                    <Card.Body>
                      <h2>Make a Call</h2>
                      <span style={{ fontSize: "50px" }}>&#x260E;</span>
                      <h4>6301538540</h4>
                    </Card.Body>
                  </center>
                </Card>
              </div>
              <div>
                <Card
                  bg="light"
                  text="dark"
                  style={{ width: '400px', height: '200px' }}
                  className="mb-2"
                >
                  <center>
                    <Card.Body>
                      <h2>Send an Email</h2>
                      <Envelope color="red" size={50} />
                      <h4>ch.srikanth0809@gmail.com</h4>
                    </Card.Body>
                  </center>
                </Card>
              </div>
            </div>
          );
        }
export default ContactUs;