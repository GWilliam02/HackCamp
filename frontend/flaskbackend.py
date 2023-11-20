from flask import Flask, jsonify, request
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app) 


@app.post('/run_pipeline')
def run_pipeline():
    try:
        
        start_pipeline_url = "https://api-v2.agenthub.dev/remote_start_pipeline"
        start_pipeline_headers = {
            "Content-Type": "application/json",
            "x-auth-key": "xN1WJ1T18BXsmllIEEw8Juq0Zmp1",
        }
        start_pipeline_data = {
            "user_id": "xN1WJ1T18BXsmllIEEw8Juq0Zmp1",
            "saved_item_id": "fjcuNfSyPi9E3jaL58nN53",
            "api_key": "f9ce9031b8024177aa734e357102f078",
            "pipeline_inputs": [
                {"input_name": "question", "value": "what courses should i take in first year to get into computer science major"},
            ]
        }
        
        start_pipeline_response = requests.post(start_pipeline_url, headers=start_pipeline_headers, json=start_pipeline_data)
        if not start_pipeline_response.ok:
            return jsonify({"status": "ERROR", "message": "Failed to start the pipeline"}), 500
        
        url = start_pipeline_response.json()
        run_id = url.split('run_id=')[1]
        
        pipeline_status_url = f"https://api-v2.agenthub.dev/plrun?run_id={run_id}"
        pipeline_status_headers = {
            "Content-Type": "application/json",
            "x-auth-key": "xN1WJ1T18BXsmllIEEw8Juq0Zmp1"
        }


        while True:
            pipeline_status_response = requests.get(pipeline_status_url, headers=pipeline_status_headers)
            state = pipeline_status_response.json().get('state')

            if state == "FAILED":
                return jsonify({"status": "FAILED", "message": pipeline_status_response.json()}), 500
            elif state == "DONE":
                outputs = pipeline_status_response.json().get('outputs', {})
                answer2_value = outputs.get('answer2')
                return jsonify({"status": "DONE", "answer2_value": answer2_value}), 200

        return jsonify({"status": "ERROR", "message": "Unknown error"}), 500

    except Exception as e:
        
        return jsonify({"status": "ERROR", "message": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
