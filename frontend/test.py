import requests
import json



url = "https://api-v2.agenthub.dev/remote_start_pipeline"

headers = {
  "Content-Type": "application/json",
  "x-auth-key": "xN1WJ1T18BXsmllIEEw8Juq0Zmp1"
}

data = {
  "user_id": "xN1WJ1T18BXsmllIEEw8Juq0Zmp1",
  "saved_item_id": "fjcuNfSyPi9E3jaL58nN53",
  "api_key": "f9ce9031b8024177aa734e357102f078",
  "pipeline_inputs": [
        {"input_name": "question", "value": "what courses should i take in first year to get into computer science major"},
    ]
}


response = requests.post(url, headers=headers, json=data)

url = response.json()
print(url)

run_id = url.split('run_id=')[1]
print(run_id)


url = f"https://api-v2.agenthub.dev/plrun?run_id={run_id}"
headers = {
    "x-auth-key": "xN1WJ1T18BXsmllIEEw8Juq0Zmp1"
}

while (True):
    response = requests.get(url, headers=headers)
    print(response.json()['state'])
    if (response.json()['state'] == "FAILED"):
        print(response.json())
        break
    if (response.json()['state'] == "DONE"):
        print(response.json())
        break


outputs = response.json().get('outputs', {})

answer2_value = outputs.get('answer2')

print(answer2_value)
