import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const Teacher = () => {
    const [user]=useAuthState(auth)
 
    return (
        <div>
            {user?user.email:''}
            
        </div>
    );
};

export default Teacher;