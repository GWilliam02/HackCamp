export const sayHello = () => {
  return "helloworld";
};

export const getText = async (text) => {
  // Example data to send to the Python script
  const requestData = { query: text };

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
