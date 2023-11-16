import React, { useEffect, useState } from 'react';
import Showclass from './Showclass';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useLocation } from 'react-router-dom';


const ShowClasses = () => {
    const [users, setUsers] = useState([]);
    const [user]=useAuthState(auth);
    const userEmail=user?user.email:'';


  useEffect(() => {
    fetch(`http://localhost:5000/classes?email=${userEmail}`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [userEmail]);
    return (
        <div className=' bg-slate-200'>
            <h2 className='text-center'>Available Classes: {users.length}</h2>
            <div className='grid grid-cols-3 gap-6 my-12 mx-auto'>
            {
              users.length>0 &&  users.map(user=><Showclass
                key={user._id}
                user={user}
                ></Showclass>)
            }
            </div>
        </div>
    );
};

export default ShowClasses;