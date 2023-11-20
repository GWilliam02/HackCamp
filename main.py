import requests
import json
from flask import Flask, jsonify, request
from flask_cors import CORS 
import config as config

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/', methods = ['POST', 'GET'])
def index():
    
    user_input = request.json.get('user_input')
    
    print(input)

    url = "https://api-v2.agenthub.dev/remote_start_pipeline"

    headers = {
    "Content-Type": "application/json",
    "x-auth-key": config.X_AUTH_KEY
    }

    data = {
    "user_id": config.X_AUTH_KEY,
    "saved_item_id": config.PIPELINE_KEY,
    "api_key": config.API_KEY,
    "pipeline_inputs": [
            {"input_name": "question", "value": user_input},
        ]
    }


    response = requests.post(url, headers=headers, json=data)

    url = response.json()
    print(url)

    run_id = url.split('run_id=')[1]
    print(run_id)


    url = f"https://api-v2.agenthub.dev/plrun?run_id={run_id}"
    headers = {
        "x-auth-key": config.X_AUTH_KEY
    }

    while (True):
        response = requests.get(url, headers=headers)
        print(response.json()['state'])
        if (response.json()['state'] == "FAILED"):
            print(response.json()['output'])
            break
        if (response.json()['state'] == "DONE"):
            outputs = response.json().get('outputs', {})
            answer2_value = outputs.get('answer2')
            return jsonify({"status": "DONE", "answer2_value": answer2_value}), 200
        
            # print(response.json()['outputs']['answer2'])
            # break
    
    return response.json()['outputs']['answer2']


if __name__ == "__main__":
    app.run(port=8000, debug = True)

