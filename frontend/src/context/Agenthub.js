import axios from "axios";

let agenthubUrl = "https://api-v2.agenthub.dev/remote_start_pipeline";
let agenthubHeaders = {
  "Content-Type": "application/json",
  "x-auth-key": "xN1WJ1T18BXsmllIEEw8Juq0Zmp1",
};

export const getOutput = async (userInput) => {
  try {
    // Make a request to start the pipeline with user input
    const startPipelineData = {
      user_id: "xN1WJ1T18BXsmllIEEw8Juq0Zmp1",
      saved_item_id: "fjcuNfSyPi9E3jaL58nN53",
      api_key: "f9ce9031b8024177aa734e357102f078",
      pipeline_inputs: [
        {
          input_name: "question",
          value: data.get("question"),
        },
      ],
    };

    const startPipelineResponse = await axios.post(agenthubUrl, startPipelineData, {
      headers: agenthubHeaders,
    });

    if (!startPipelineResponse.data.ok) {
      return { status: "ERROR", message: "Failed to start the pipeline" };
    }

    const runId = startPipelineResponse.data.run_id;

    // Poll the status until it's done
    const pipelineStatusUrl = `https://api-v2.agenthub.dev/plrun?run_id=${runId}`;
    while (true) {
      const pipelineStatusResponse = await axios.get(pipelineStatusUrl, {
        headers: agenthubHeaders,
      });

      const state = pipelineStatusResponse.data.state;

      if (state === "FAILED") {
        return { status: "FAILED", message: pipelineStatusResponse.data };
      } else if (state === "DONE") {
        const answer2Value = pipelineStatusResponse.data.outputs.answer2;
        return { status: "DONE", answer2Value };
      }
    }
  } catch (error) {
    return { status: "ERROR", message: error.message };
  }
};

export const sayHello = () => {
  return "helloworld";
};

export const getText = async () => {
  try {
    // Example data to send to the Python script
    const requestData = { name: "John" };

    // Make a POST request to the Flask server
    const response = await fetch("http://127.0.0.1:5000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    // Parse the JSON response
    const result = await response.json();
    const returnVal = result.answer2_value;

    console.log(result.answer2_value);
    return returnVal;
  } catch (error) {
    console.error("Error fetching answer:", error);
    return null;
  }
};
