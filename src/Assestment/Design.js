import axios from 'axios';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Design = () => {
  const [totalquestion, setTotalquestion] = useState(0);
  const [questions, setQuestions] = useState([]);
 

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
    setQuestions([...questions, {
      question: "",
      options: ["", "", "", ""],
      correctOption: 0,
    }]);
    setTotalquestion(totalquestion+1)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/questions", questions);
      console.log("Questions posted:", response.data);
    } catch (error) {
      console.error("Error posting questions:", error);
    }
  };

  return (
    <div>
      <h1>Total question: {totalquestion}</h1>

      <form onSubmit={handleSubmit}>
        {questions.map((question, questionIndex) => (
          <div key={questionIndex}>
            <label>
              Question {questionIndex + 1}:
              <input
                type="text"
                value={question.question}
                onChange={(e) => handleQuestionChange(e, questionIndex)}
              />
            </label>

            {question.options.map((option, optionIndex) => (
              <div key={optionIndex}>
                <label>
                  Option {optionIndex + 1}:
                  <input
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

       <Button type="button" onClick={addQuestion}>Next</Button> 
         <Button type="submit">Submit</Button>
      
       
      </form>
    </div>
  );
};

export default Design;
