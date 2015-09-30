from flask import Flask 
from flask import render_template

app = Flask(__name__)

#to use templates in flask, we need to create a directory - flask automatically looks for a folder named templates and automaticlly
#renders it when it comes across it in a view

@app.route('/')
@app.route('/add/<int:num1>/<int:num2>')
def add(num1, num2):
	return render_template("add.html")

app.run(debug=True, port=8000, host='0.0.0.0')  #debug=True reloads whenever code changes