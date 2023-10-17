import React, { useEffect, useState } from 'react';
import Showclass from './Showclass';
import { light } from '@mui/material/styles/createPalette';

const ShowClasses = () => {
    const[users,setUsers]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/classes')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    }
        ,[])
    return (
        <div className=' bg-slate-200'>
            <h2 className='text-center'>Available Classes: {users.length}</h2>
            <div className='grid grid-cols-3 gap-6 my-12 mx-auto'>
            {
                users.map(user=><Showclass
                key={user._id}
                user={user}
                ></Showclass>)
            }
            </div>
        </div>
    );
};

export default ShowClasses;