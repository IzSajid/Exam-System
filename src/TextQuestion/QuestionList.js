import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const QuestionList = () => {
    const {classId}=useParams();
    console.log(classId);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
        try {
          const response = await fetch(`http://localhost:5000/getquestionsandscore/${classId}`);
          const contentType = response.headers.get('content-type');
      
          if (!response.ok) {
            throw new Error(`Server returned ${response.status} ${response.statusText}`);
          }
      
          if (!contentType || !contentType.includes('application/json')) {
            const text = await response.text();
            throw new Error(`Invalid response format. Expected JSON, but received: ${text}`);
          }
      
          const data = await response.json();
          setQuestions(data);
        } catch (error) {
          console.error('Error fetching questions:', error); // Log the full error object
        }
      };
      

    fetchQuestions();
  }, [classId]);

  return (
    <div>
      <h2>Questions and Scores:</h2>
      <ul>
        {questions.map((question) => (
          <li key={question._id}>
            <p>Question: {question.question}</p>
            <p>Keywords: {question.keywords.join(', ')}</p>
            <p>Score: {question.score}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionList;
