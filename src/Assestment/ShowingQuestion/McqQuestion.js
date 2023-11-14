import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'flowbite-react';



const McqQuestion = ({ mcq }) => {

  // Destructuring the props from mcq
  const { question, options, correctOption } = mcq;
  const [selectedOption, setSelectedOption] = useState(null);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the selected option is correct
    if (selectedOption === correctOption) {
      setTotalCorrect((prevTotal) => prevTotal + 10);
    }

    // Navigate to the next page or display result
    // navigate('/result', { state: { totalCorrect } });
    setFormSubmitted(true);
  };

  const onOptionChange = (e) => {
    setSelectedOption(parseInt(e.target.value, 10));
  };

  return (
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
        <Button type='button' onClick={handleSubmit}>
          Submit
        </Button>
        <div>
        {formSubmitted &&  (
    <div className='bg-current h-20 mx-auto w-50 mt-5 text-center '> 
       <div className='result flex-center text-white '>
                <div className='flex'>
                     <span>Total quizz Point: </span>
                    <span className='semibold'>{question.length} </span>

               </div>
               
              <div className='flex'>
                   <span>Total Mark </span>
                     <span className='semibold'>{totalCorrect} </span>

                 </div>
                 </div>

    </div>
  )}
        </div>
       </div>
       
      
    </div>
  );
};

export default McqQuestion;
