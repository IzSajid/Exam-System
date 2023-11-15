import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'flowbite-react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';



const McqQuestion = ({ mcq }) => {
    const navigate=useNavigate();
    const {id}=useParams();
    let pivotal=0;

  // Destructuring the props from mcq
  const { question, options, correctOption } = mcq;
  const [selectedOption, setSelectedOption] = useState(null);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the selected option is correct
    if (selectedOption === correctOption) {
      setTotalCorrect(pivotal+1);
    }

    // Navigate to the next page or display result
    // navigate('/result', { state: { totalCorrect } });
    setFormSubmitted(true);
  };

  const onOptionChange = (e) => {
    setSelectedOption(parseInt(e.target.value, 10));
  };
  const handleExit=()=>{
    if(window.confirm('Want to end the text')){
        navigate(`/classes/${id}`)
    }
  }

  return (
    <div>
        <div>
      <div>
        <h5 className=''>Question- {question}</h5>

        <div>
          <ul className=''>
            {options.map((option, index) => (
              <li
                className='shadow-lg shadow-slate-600 border h-16 text-center font-semibold mb-4 w-75 mx-auto rounded'
                key={index}
              >
                <input
                  className='mr-7'
                  type='radio'
                  name='mcqOption'
                  value={index}
                  checked={selectedOption === index}
                  onChange={onOptionChange}
                />
                {option}
              </li>
            ))}
          </ul>
        </div>
       
        <div>
       
        {formSubmitted &&  (
    <div className='bg-current h-20 mx-auto w-50 mt-5 text-center mb-7 rounded-lg '> 
       <div className='result flex-center text-white '>
               
              <div className='flex'>
                   <span className=''>Total Mark </span>
                     <span className='semibold'>{totalCorrect} </span>

                 </div>
                 </div>

    </div>
  ) 
  }
  {
    formSubmitted && (
        <Button className='w-25' variant="danger" onClick={handleExit}>
        Exit
      </Button>
    )
  }
  
        </div>

       </div>
       <Button type='button' onClick={handleSubmit}>
          Submit
        </Button>
      
       
      
    </div>

    </div>
    
  );
};

export default McqQuestion;