import ChatBot from 'react-simple-chatbot'
import React from 'react'

let message = "Hello! I am a CPSC student advising chatbot! Ask me about your program requirements!";


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
            message: 'placeholder',
            trigger: 'question',
          }
        ]}
      />
      </>
    )
  }
  
  // export default App
  export default CpscBot
  