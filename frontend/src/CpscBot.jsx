import ChatBot from "react-simple-chatbot";
import React from "react";
import { getText } from "./context/Agenthub";
import PropTypes from "prop-types";

// const self = this;
// const { steps } = this.props;
// const search = steps.search.value;

let message =
  "Hello! I am a CPSC student advising chatbot! Ask me about your program requirements!";

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
            message: { previousValue },
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
