import React from 'react';
import { Carousel } from 'react-bootstrap';
import pic1 from '../../Pictures/banner1.png';
import pic2 from '../../Pictures/banner2.png';
import pic3 from '../../Pictures/banner3.png';

const Banner = () => {
    return (
        <Carousel className='w-100' >
        <Carousel.Item>
          <img
            className="d-block w-100" style={{height:'35rem'}}
            src={pic1}
            alt=""
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" style={{height:'35rem'}}
           src={pic2}
            alt=""
          />
  
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" style={{height:'35rem'}}
            src={pic3}
            alt=""
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;