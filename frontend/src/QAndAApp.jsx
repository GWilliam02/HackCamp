import React, { useState } from 'react';

// Import the getText function
import { getText } from './context/Agenthub'; // Update the path accordingly

const QAndAApp = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Display loading state
    setLoading(true);

    try {
      // Use the getText function to get the answer
      const answerText = await getText(question);

      // Update state with the answer
      setAnswer(answerText);
    } catch (error) {
      console.error('Error fetching answer:', error);
    } finally {
      // Hide loading state
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Async Q&A App</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Enter your question:
          <input type="text" value={question} onChange={handleQuestionChange} />
        </label>

        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Get Answer'}
        </button>
      </form>

      {answer && (
        <div>
          <h2>Answer:</h2>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default QAndAApp;
