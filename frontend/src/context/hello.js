// const url = 'https://api-v2.agenthub.dev/remote_start_pipeline';
// const headers = {'Content-Type': 'application/json', 'x-auth-key': 'xN1WJ1T18BXsmllIEEw8Juq0Zmp1',};
// const data = {
//     user_id: 'xN1WJ1T18BXsmllIEEw8Juq0Zmp1',
//     saved_item_id: 'fjcuNfSyPi9E3jaL58nN53',
//     api_key: '8cb7b82a600d4d6d863505b4ebe99167',
//     openai_token: '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',
//     pipeline_inputs: [{
//         input_name: 'question',
//         value: 'What are the classes i need to take as a second year statistics student?'
//     },],
// };

// fetch(url, {
//     method: 'POST',
//     headers: headers,
//     body: JSON.stringify(data),
// }).then((response) => response.json()).then((data) => calculateOutput(data));

// export function calculateOutput(data) {
//     const url = data;
//     const headers = {'x-auth-key': 'xN1WJ1T18BXsmllIEEw8Juq0Zmp1',};
//     fetch(url, {
//         method: 'GET',
//         headers: headers,
//     }).then((response) => response.json()).then((data) => console.log(data));
// }
