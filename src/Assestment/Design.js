import axios from 'axios';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Menu from '../Cohorts/Menu';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Design = () => {
  const [totalquestion, setTotalquestion] = useState(0);
  const [questions, setQuestions] = useState([]);
  const { id } = useParams();

  const handleQuestionChange = (e, questionIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].question = e.target.value;
    setQuestions(newQuestions);
  };

  const handleOptionChange = (e, questionIndex, optionIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].options[optionIndex] = e.target.value;
    setQuestions(newQuestions);
  };

  const handleCorrectOptionChange = (questionIndex, optionIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].correctOption = optionIndex;
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        question: "",
        options: ["", "", "", ""],
        correctOption: 0,
      },
    ]);
    setTotalquestion(totalquestion + 1);
  };

  const deleteQuestion = () => {
    if (questions.length > 0) {
      const newQuestions = [...questions];
      newQuestions.pop();
      setQuestions(newQuestions);
      if (totalquestion > 1) {
        setTotalquestion(totalquestion - 1);
      } else {
        setTotalquestion(0);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `http://localhost:5000/classes/${id}/design`;

      // Create a single ObjectId for the entire form
      const formId = uuidv4();


      // Create a data object to match the backend's expectation
      const data = {
        formId: formId, // Use the same formId for all questions within the form
        questions: questions.map((question) => ({
          question: question.question,
          options: question.options,
          correctOption: question.correctOption,
        })),
      };

      const response = await axios.post(url, data);
      console.log("Questions posted:", response.data);
    } catch (error) {
      console.error("Error posting questions:", error);
    }
  };

  return (
    <div className='grid grid-cols-12 gap-2'>
      <div className='grid col-span-2'>
        <Menu></Menu>
      </div>
      <div className='text-center grid col-span-10'>
        <h1 className='mt-6'>Total question: {totalquestion}</h1>

        {/* conditional rendering of next button && submit button and delete button */}
        {questions.length === 0 ? (
          <div className=''>
            <Button
              type="button"
              className='btn btn-lg mx-auto'
              onClick={addQuestion}
            >
              Add Question
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className='bg-slate-300 shadow-2xl w-50 mx-auto'>
            {questions.map((question, questionIndex) => (
              <div key={questionIndex} className=''>
                <div className=''>
                  <label className='font-bold mt-3'>
                    Question {questionIndex + 1}:
                    <input className='w-100 mb-4 h-20'
                      type="text"
                      value={question.question}
                      onChange={(e) => handleQuestionChange(e, questionIndex)}
                    />
                  </label>
                </div>

                {question.options.map((option, optionIndex) => (
                  <div key={optionIndex} className=''>
                    <label className='mx-4'>
                      Option {optionIndex + 1}:
                      <input className='my-3'
                        type="text"
                        value={option}
                        onChange={(e) => handleOptionChange(e, questionIndex, optionIndex)}
                      />
                    </label>

                    <label>
                      Correct Option:
                      <input
                        type="radio"
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
              <Button
                type="button"
                className='btn btn-secondary w-36'
                onClick={addQuestion}
              >
                Add Question
              </Button>
              <Button className='btn btn-secondary  w-40' type="button" onClick={deleteQuestion}>Delete Question</Button>
              <Button className='btn btn-info' type="submit">Submit</Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Design;
