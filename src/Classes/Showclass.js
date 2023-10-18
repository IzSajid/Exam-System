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
      <Card.Body className=''>
        <Card.Title>{name}</Card.Title>
        
        <Card.Text>
        
          Class Code: {cid}
        </Card.Text>
      </Card.Body>
     <div className='grid grid-cols-2'>
        <Link>
         <p>Delete</p>
       </Link>
        <Link to='/menu'><p className='ml-16'> Details </p></Link>
     
     </div>
    </Card>
        </div>
    );
};

export default Showclass;