import React from 'react';
import { Button, Card } from 'react-bootstrap';
import pic1 from '../Pictures/writing-online-exam.webp'
import { Link, useNavigate } from 'react-router-dom';





const Showclass = ({user}) => {
    const {_id,name,cid}=user;
    const navigate=useNavigate();

    const showclassNavigate=id=>{
      navigate(`/user/${id}`)

    }
   
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
        <Button className='' variant='link' onClick={()=>showclassNavigate(_id)}><p className='ml-5'> Detail </p></Button>
     
     </div>
    </Card>
        </div>
    );
};

export default Showclass;