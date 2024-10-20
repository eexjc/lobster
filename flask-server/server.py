import time

from flask import Flask, jsonify
from flask import Flask, jsonify,request
from flask_socketio import SocketIO, emit
from flask_cors import CORS
import time
import numpy as np

app = Flask(__name__)
CORS(app)
socketio = SocketIO(app, cors_allowed_origins="*")

@app.route('/start-calculation', methods=['POST'])
def start_calculation():
    param1 = request.form.get('param1')
    print(f'param1 is {param1}')
    socketio.start_background_task(target=long_calculation)
    return jsonify({"message": "Calculation started"})


@app.route('/curve-data')
def get_curve_data():
    # Generate some sample curve data
    x = np.linspace(0, 10, 100)
    y = np.sin(x)

    data = [{'x': float(x_val), 'y': float(y_val)} for x_val, y_val in zip(x, y)]

    return jsonify(data)


def long_calculation():
    total_steps = 10
    for step in range(total_steps):
        # Simulate a long calculation step
        time.sleep(0.2)
        progress = (step + 1) / total_steps * 100
        socketio.emit('calculation_progress', {'progress': progress})
    o = list(range(1,10000,1))
    socketio.emit('calculation_complete', {'result': "Calculation complete",'result_detail':o})


@app.route("/members")
def members():
    result= {"members":["a", "b"]}

    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)