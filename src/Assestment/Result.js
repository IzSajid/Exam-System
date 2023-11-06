import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import './Quizz.css';


const Result = () => {
    const [user]=useAuthState(auth);

    return (
        <div className=''>
             {/* header  */}
            <div className=' mt-6 text-center border-4 border-gray-500 mx-96 px-44'>
                <h1 className=''>MCQ Question</h1>
                

            </div>
            <div className='result flex-center'>
                <div className='flex'>
                    <span>Total quizz Point: </span>
                    <span className='semibold'>50 </span>

                </div>
                <div className='flex'>
                    <span>Total Questions: </span>
                    <span className='semibold'>30 </span>

                </div>
                <div className='flex'>
                    <span>Total Mark </span>
                    <span className='semibold'>20 </span>

                </div>
            </div>
        
            
        </div>
    );
};

export default Result;