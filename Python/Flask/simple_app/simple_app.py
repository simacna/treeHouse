from flask import Flask 
# from flask import request  #global request object

app = Flask(__name__)  #use whatever our current namespace is. 

@app.route('/') #we're giving the below function a view -- that is what the route is doing
@app.route('/<name>') #tells flask that whatever after the forward slash store it as name
#now the url can be 0.0.0.0:8000/sina
def index(name="Treehouse"):
	# name = request.args.get('name', name)  we don't need the name = req... because we're storing it above
	# with the @app.route('/<name>')
	#if we get a name great, if we don't, use the name passed as parameter
	#in the url if typed ?name=sina, it will output "hello from sina" instead of "hello from treehouse"
	return "Hello from {}".format(name)

@app.route('/add/<num1>/<num2>')
def add(num1, num2):
	return "{} + {} = {}".format(num1, num2, num1 + num2)

app.run(debug=True, port=8000, host='0.0.0.0')  #debug=True reloads whenever code changes