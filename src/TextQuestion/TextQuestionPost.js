// ... (imports)

import { useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const TextQuestionPost = () => {
  const [question, setQuestion] = useState('');
  const [keywords, setKeywords] = useState('');
  const [loading, setLoading] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);
  const { id } = useParams();
  console.log(id);

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleKeywordsChange = (e) => {
    setKeywords(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSubmissionError(null);

    try {
      const response = await fetch(`http://localhost:5000/submitquestion/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: question, keywords: keywords.split(',') }),
      });

      if (response.ok) {
        console.log('Question submitted successfully!');
      } else {
        console.error('Error submitting question');
        setSubmissionError('An error occurred while submitting the question.');
      }
    } catch (error) {
      console.error('Error submitting question', error);
      setSubmissionError('An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form className='grid grid-cols-1 w-50 mx-auto' onSubmit={handleSubmit}>
        <h1 className='text-center'>Post a Text Question</h1>
        <label className='' htmlFor="question">Question:</label>
        <textarea
          id="question"
          value={question}
          onChange={handleQuestionChange}
          rows="4"
          cols="50"
          required
        ></textarea>

        <label className='mt-3' htmlFor="keywords">Keywords (comma-separated):</label>
        <input
          type="text"
          id="keywords"
          value={keywords}
          onChange={handleKeywordsChange}
          required
        />

        <Button className='ml-5 w-25 mt-5 mx-auto' type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit Question'}
        </Button>

        {submissionError && <p className="text-red-500">{submissionError}</p>}
      </form>
    </div>
  );
};

export default TextQuestionPost;
