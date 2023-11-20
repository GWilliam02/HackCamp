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

fetch(url, {
  method: "POST",
  headers: headers,
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((urlResponse) => {
    console.log(urlResponse);

    const run_id = urlResponse.split("run_id=")[1];
    console.log(run_id);

    url = `https://api-v2.agenthub.dev/plrun?run_id=${run_id}`;
    headers = {
      "x-auth-key": "xN1WJ1T18BXsmllIEEw8Juq0Zmp1",
    };

    const checkRunStatus = async () => {
      const response = await fetch(url, {
        method: "GET",
        headers: headers,
      });

      const responseBody = await response.json();
      console.log(responseBody.state);

      if (responseBody.state === "FAILED") {
        console.log(responseBody.output);
      }

      if (responseBody.state === "DONE") {
        console.log(responseBody.outputs.answer2);
      }

      if (responseBody.state !== "FAILED" && responseBody.state !== "DONE") {
        // If not FAILED or DONE, continue checking
        checkRunStatus();
      }
    };

    checkRunStatus();
  })
  .catch((error) => console.error("Error:", error));
