// import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../firebase.init';
// import './Quizz.css';
// import { useLocation } from 'react-router-dom';


// const Result = ({mcq}) => {
//     const{question}=mcq;

//     const [user]=useAuthState(auth);
//     const location = useLocation();
//     const totalCorrect = location.state?.totalCorrect || 0;

//     return (
//         <div className=''>
//              {/* header  */}
//             <div className=' mt-6 text-center border-4 border-gray-500 mx-96 px-44'>
//                 <h1 className=''>MCQ Question</h1>
                

//             </div>
//             <div className='result flex-center'>
//                 <div className='flex'>
//                     <span>Total quizz Point: </span>
//                     <span className='semibold'>{question.length} </span>

//                 </div>
               
//                 <div className='flex'>
//                     <span>Total Mark </span>
//                     <span className='semibold'>{totalCorrect} </span>

//                 </div>
//             </div>
        
            
//         </div>
//     );
// };

// export default Result;