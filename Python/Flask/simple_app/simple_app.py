from flask import Flask 

app = Flask(__name__)  #use whatever our current namespace is. 

@app.route('/')  #we're giving the below function a view -- that is what the route is doing
def index():
	return "Hello from Treehouse"

app.run(debug=True, port=8000, host='0.0.0.0')