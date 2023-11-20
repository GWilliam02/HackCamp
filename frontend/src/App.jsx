import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChatBot from 'react-simple-chatbot'

let message = "Hello! I am a CPSC student advising chatbot! Ask me about your program requirements!";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <h1 className="text-3xl font-bold underline text-center">Hello world!</h1>
    </>
  )
  }

function CpscBot(message_id) {
  return (
    <>
    <h1>CPSC Advising ChatBot</h1>
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
