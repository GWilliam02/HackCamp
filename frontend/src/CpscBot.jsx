import ChatBot from 'react-simple-chatbot'
import React from 'react'


let message = "Hello! I am a CPSC student advising chatbot! Ask me about your program requirements!";

const test_responses = ["random string 1", "random string 2", "random string 3", "random string 4"];

function generateResponse(possible_responses) {
  const index = Math.floor(Math.random() * possible_responses.length);
  return possible_responses[index];
}


function CpscBot() {
    return (
      <>
      <ChatBot
        steps={[
          {
            id: 'initial',
            message: message,
            trigger: 'question',
          },
          {
            id: 'question',
            user: true,
            trigger: 'response',
          },
          {
            id: 'response',
            message: generateResponse(test_responses),
            trigger: 'question',
          }
        ]}

        width='100vw'
        height='100vh'

      />
      </>
    )
  }
  
  // export default App
  export default CpscBot
  