import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const UpdateMyProfile = () => {
    const user = useAuthState(auth);
    return (
        <div>
            <h1>Update Profile</h1>
        </div>
    );
};

export default UpdateMyProfile;