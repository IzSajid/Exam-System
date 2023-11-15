import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const ShowQuestion = ({ id, formId, fetchedQuestions, setFetchedQuestions }) => {
  const [selectedOptions, setSelectedOptions] = useState(
    JSON.parse(localStorage.getItem('selectedOptions')) || {}
  );
  const [submitted, setSubmitted] = useState(
    JSON.parse(localStorage.getItem('submitted')) || false
  );
  const [questionsExpired, setQuestionsExpired] = useState(false);

  useEffect(() => {
    // Reset selected options and expiration status when new questions are fetched
    setSelectedOptions({});
    setSubmitted(false);
    setQuestionsExpired(false);
  }, [fetchedQuestions]);

  useEffect(() => {
    // Check question expiration when questions are fetched
    checkQuestionsExpiration();
  }, [fetchedQuestions]);

  const checkQuestionsExpiration = () => {
    const currentTime = Date.now();
    const expiredQuestions = fetchedQuestions.filter((question) => {
      const questionPostTime = new Date(question.postTime).getTime();
      const expirationTime = questionPostTime + 1 * 60 * 60 * 1000; // 1 hour expiration
      return currentTime >= expirationTime;
    });

    // If there are any expired questions, set the expiration flag
    if (expiredQuestions.length > 0) {
      setQuestionsExpired(true);
    }
  };

  const handleOptionSelect = (questionIndex, optionIndex) => {
    if (!submitted && !questionsExpired) {
      setSelectedOptions({
        ...selectedOptions,
        [questionIndex]: optionIndex,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Calculate the marks based on selected options
    const marks = calculateMarks();

    // Update state and store in localStorage
    setSubmitted(true);
    localStorage.setItem('selectedOptions', JSON.stringify(selectedOptions));
    localStorage.setItem('submitted', JSON.stringify(true));

    // Additional logic as needed
    console.log('Marks:', marks);
  };

  const calculateMarks = () => {
    // For simplicity, we'll just count the correct answers
    let correctAnswers = 0;

    fetchedQuestions.forEach((question, questionIndex) => {
      const selectedOptionIndex = selectedOptions[questionIndex];
      if (selectedOptionIndex !== undefined && selectedOptionIndex === question.correctOption) {
        correctAnswers += 1;
      }
    });

    return correctAnswers;
  };

  return (
    <div className='h-auto bg-slate-900 shadow-2xl shadow-slate-600 text-white mt-5 w-75 ml-16'>
      <h2>Exam Questions:</h2>
      <ul>
        {fetchedQuestions &&
          fetchedQuestions.map((question, questionIndex) => (
            <li key={questionIndex}>
              <h3>Question {questionIndex + 1}:</h3>
              <p>{question.question}</p>

              <ul>
                {question.options.map((option, optionIndex) => (
                  <li
                    className='shadow-lg bg-white mb-4 w-50 mx-auto h-9 rouded text-black'
                    key={optionIndex}
                    style={{
                      background:
                        selectedOptions[questionIndex] === optionIndex ? 'lightblue' : 'inherit',
                    }}
                  >
                    <input
                      className='mr-4'
                      type='radio'
                      name={`question_${questionIndex}`}
                      value={optionIndex}
                      checked={selectedOptions[questionIndex] === optionIndex}
                      onChange={() => handleOptionSelect(questionIndex, optionIndex)}
                      disabled={submitted || questionsExpired}
                    />
                    {option}
                  </li>
                ))}
              </ul>
            </li>
          ))}
      </ul>

      {!submitted && !questionsExpired && (
        <Button
          onClick={handleSubmit}
          disabled={Object.keys(selectedOptions).length !== fetchedQuestions.length}
        >
          Submit
        </Button>
      )}

      {submitted && (
        <div>
          <h3>Marks: {calculateMarks()}/{fetchedQuestions.length}</h3>
          {/* You can show additional feedback based on the exam result */}
          {/* <h3>Total Marks: </h3> */}
        </div>
      )}

      {questionsExpired && (
        <div>
          <p>The questions have expired. You cannot submit answers after the expiration time.</p>
        </div>
      )}
    </div>
  );
};

export default ShowQuestion;
