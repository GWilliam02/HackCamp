import ChatBot from "react-simple-chatbot";
import React from "react";
import { getOutput, sayHello, getText } from "./context/Agenthub";

let message =
  "Hello! I am a CPSC student advising chatbot! Ask me about your program requirements!";


function generateResponse(possible_responses) {
  const index = Math.floor(Math.random() * possible_responses.length);
  getText("hello");
  return possible_responses[index];
}


CpscBot.defaultProps = {
  steps: undefined,
  triggerNextStep: undefined,
};

const answer = await getText("hello").toString();


function CpscBot() {
  return (
    <>
      <ChatBot
        steps={[
          {
            id: "initial",
            message: message,
            trigger: "question",
          },
          {
            id: "question",
            user: true,
            trigger: "response",
          },
          {
            id: "response",
            message: () => {
              return getText('hello').then(answer => {
                return answer;
              })
            },

            waitAction: true,
            trigger: "question",
          },
        ]}
        width="100vw"
        height="100vh"
      />
    </>
  );
}

// export default App
export default CpscBot;
