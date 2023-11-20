import ChatBot from "react-simple-chatbot";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { getText } from "./context/Agenthub";
import { useState, useContext } from "react";
import MyComponent from "./context/Text";

let message =
  "Hello! I am a CPSC student advising chatbot! Ask me about your program requirements!";

// const getText = async () => {
//   const result = await getText(text).toString();
// };

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
            trigger: "4",
          },
          {
            id: "4",
            component: <MyComponent data={{ previousValue, steps }} />,
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
