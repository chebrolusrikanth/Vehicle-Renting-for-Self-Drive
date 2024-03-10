import './First.css';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';

function First(){
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='corosol'>
    <Carousel style={{ maxWidth: '100%', maxHeight: '600px',position:'relative' }}activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://files.123inventatuweb.com/49/4e/494e90c8-4c77-419a-909c-99f06b66cffb.jpg"
        style={{ width: '400px', height: '600px' }} 
        alt='Not Found'
      />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://consumerlink.co.za/wp-content/uploads/2021/01/rent-to-buy.jpg"
        style={{ width: '400px', height: '700px' }} 
        alt='Not Found'
      />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.freevector.com/uploads/vector/preview/27644/rental2.jpg"
        style={{ width: '400px', height: '800px' }} 
        alt='Not Found'
      />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default First;