import axios from "axios";

let url = "https://api-v2.agenthub.dev/remote_start_pipeline";

let headers = {
  "Content-Type": "application/json",
  "x-auth-key": "xN1WJ1T18BXsmllIEEw8Juq0Zmp1",
};

let data = {
  user_id: "xN1WJ1T18BXsmllIEEw8Juq0Zmp1",
  saved_item_id: "fjcuNfSyPi9E3jaL58nN53",
  api_key: "f9ce9031b8024177aa734e357102f078",
  pipeline_inputs: [
    {
      input_name: "question",
      value:
        "what courses should i take in first year to get into computer science major",
    },
  ],
};

export const getOutput = async (text) => {
  const response = await fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
  });

  console.log(response);

  //   let run_id = response.split("run_id=")[1];
  //   console.log(run_id);

  //   url = "https://api-v2.agenthub.dev/plrun?run_id=${run_id}";
  //   headers = {
  //     "x-auth-key": "xN1WJ1T18BXsmllIEEw8Juq0Zmp1",
  //   };

  //   while (true) {
  //     response = axios.post(url, headers);
  //     console.log(response.state);
  //     if (response.state == "FAILED") {
  //       console.log(response.output);
  //       break;
  //     }
  //     if (response.state == "DONE") {
  //       console.log(response.json.outputs.answer2);
  //       break;
  //     }
  //   }
  //   return "Done";
};

export const sayHello = () => {
  return "helloworld";
};

export const getText = async () => {
  // Example data to send to the Python script
  const requestData = { name: "John" };

  // Make a POST request to the Flask server
  const response = await fetch("http://127.0.0.1:5000", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  });

  // Parse the JSON response
  const result = await response.json();
  let returnVal = result.answer2_value;

  console.log(result.answer2_value);
  return returnVal;
};
