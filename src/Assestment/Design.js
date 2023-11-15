import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Menu from '../Cohorts/Menu';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import ShowQuestion from './ShowingQuestion/ShowQuestion';

const Design = () => {
  const [totalquestion, setTotalquestion] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [formId, setFormId] = useState(null);
  const [fetchedQuestions, setFetchedQuestions] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission
  const { id } = useParams();

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleQuestionChange = (e, questionIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].question = e.target.value;
    setQuestions(newQuestions);
  };

  const handleCorrectOptionChange = (questionIndex, optionIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].correctOption = optionIndex;
    setQuestions(newQuestions);
  };

  const handleOptionChange = (e, questionIndex, optionIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].options[optionIndex] = e.target.value;
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    const newQuestions = [
      ...questions,
      {
        question: '',
        options: ['', '', '', ''],
        correctOption: 0,
        postTime: new Date().toISOString(),
      },
    ];
    setQuestions(newQuestions);
    setTotalquestion(totalquestion + 1);
  };

  const deleteQuestion = () => {
    if (questions.length > 0) {
      const newQuestions = [...questions];
      newQuestions.pop();
      setQuestions(newQuestions);
      setTotalquestion(Math.max(totalquestion - 1, 0));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitted) {
      // Do nothing if the form has already been submitted
      return;
    }

    try {
      const newFormId = uuidv4();
      setFormId(newFormId);
      setIsSubmitted(true); // Disable further submissions

      const data = {
        formId: newFormId,
        questions: questions.map((question) => ({
          question: question.question,
          options: question.options,
          correctOption: question.correctOption,
        })),
      };

      const response = await fetch(`http://localhost:5000/classes/${id}/design`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFetchedQuestions([...fetchedQuestions, ...questions]);
      } else {
        console.error('Error posting questions:', response.statusText);
      }
    } catch (error) {
      console.error('Error posting or fetching questions:', error);
    }
  };

  const fetchQuestions = async () => {
    try {
      const response = await fetch(`http://localhost:5000/classes/${id}/design/questions`);
      if (response.ok) {
        const questionsData = await response.json();
        setFetchedQuestions(questionsData);
      } else {
        console.error('Error fetching questions:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  return (
    <div className='grid grid-cols-12 gap-2'>
      <div className='grid col-span-2'>
        <Menu></Menu>
      </div>
     {
      isSubmitted?(<div className='text-center grid col-span-10'>{
        questions.length > 0 && formId && (
         <ShowQuestion id={id} formId={formId} fetchedQuestions={fetchedQuestions} />
       )}</div>
      ): ( <div className='text-center grid col-span-10'>
      <h1 className='mt-6'>Total question: {totalquestion}</h1>

      {questions.length === 0 ? (
        <div>
          <Button type='button' className='btn btn-lg mx-auto' onClick={addQuestion}>
            Add Question
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className='bg-slate-300 shadow-2xl w-50 mx-auto'>
          {questions.map((question, questionIndex) => (
            <div key={questionIndex}>
              <div>
                <label className='font-bold mt-3'>
                  Question {questionIndex + 1}:
                  <input
                    className='w-100 mb-4 h-20'
                    type='text'
                    value={question.question}
                    onChange={(e) => handleQuestionChange(e, questionIndex)}
                    required
                  />
                </label>
              </div>

              {question.options.map((option, optionIndex) => (
                <div key={optionIndex}>
                  <label className='mx-4'>
                    Option {optionIndex + 1}:
                    <input
                      className='my-3'
                      type='text'
                      value={option}
                      onChange={(e) => handleOptionChange(e, questionIndex, optionIndex)}
                      required
                    />
                  </label>

                  <label>
                    Correct Option:
                    <input
                      type='radio'
                      value={optionIndex}
                      checked={question.correctOption === optionIndex}
                      onChange={() => handleCorrectOptionChange(questionIndex, optionIndex)}
                    />
                  </label>
                </div>
              ))}
            </div>
          ))}
          <div className='grid grid-cols-3 gap-4 my-4 mx-4'>
            <Button type='button' className='btn btn-secondary w-36' onClick={addQuestion}>
              Add Question
            </Button>
            <Button className='btn btn-secondary w-40' type='button' onClick={deleteQuestion}>
              Delete Question
            </Button>
            <Button className='btn btn-info' type='submit' disabled={isSubmitted}>
              Submit
            </Button>
          </div>
        </form>
      )}

     
    </div>)
     }
    </div>
  );
};

export default Design;
