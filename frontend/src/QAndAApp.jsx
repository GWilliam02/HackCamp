import React, { useState } from 'react';
import axios from "axios";


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
      const response = await axios.post('http://127.0.0.1:8000/', {
                user_input: question,
            });

      
      const rans = response.data.answer2_value;

      
      const niceans = rans.replace(". ", ".\n");

      // Update state with the answer
      setAnswer(niceans);

    } catch (error) {
      console.error('Error fetching answer:', error);
    } finally {
      // Hide loading state
      setLoading(false);
    }
  };

  function Text({ answer }) {
    const formattedAnswer = answer.replace(/\n/g, '<br />');
  
    return (
      <div style={{ whiteSpace: 'pre-line' }}>
        <p dangerouslySetInnerHTML={{ __html: formattedAnswer }}></p>
      </div>
    );
  };

  return (
    <div>


      <form onSubmit={handleSubmit}>
        <label>
        Hello! I am a Science student advising chatbot! Ask me about your program requirements!
          <input 
          type="text" 
          value={question} 
          onChange={handleQuestionChange}
          style={{ 

            width: '80vw',  // Set height to fill the entire viewport
            height: '5vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '2px solid black'

          }} />
        </label>

        <button type="submit" 
        disabled={loading}
        style={{ 

            backgroundColor: "#ABDFCE",

            width: '80vw',  // Set height to fill the entire viewport
            height: '5vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '2px solid black'

          }}
        >
          {loading ? 'Loading...' : "Get Answer"}
        </button>
      </form>

      {answer && (
        <div style={{ 
            backgroundColor: 'white',
            backgroundSize: 'cover',  // You can add other background properties here
            backgroundRepeat: 'no-repeat',
            width: "80vw",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            }}>
          
          <Text answer={answer} />;
        </div>
      )}
    </div>
  );
};

export default QAndAApp;
