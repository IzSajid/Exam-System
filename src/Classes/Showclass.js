import React from 'react';
import { Button, Card } from 'react-bootstrap';
import pic1 from '../Pictures/writing-online-exam.webp'
import { Link } from 'react-router-dom';


const Showclass = ({user}) => {
    const {name,email,cid}=user;
   

    return (
        <div >
          <Card className='mx-auto shadow-lg p-3 mb-5 rounded'  style={{ width: '18rem' }}>
      <Card.Img className='h-36' variant="top" src={pic1} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        
          Class Code: {cid}
        </Card.Text>
      </Card.Body>
        <p className='ml-40'> Class Details </p>
     
    </Card>
        </div>
    );
};

export default Showclass;