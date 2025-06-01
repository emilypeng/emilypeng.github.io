from flask import Flask, render_template
from flask_mysqldb import MySQL

app = Flask(__name__)

@app.route('/')
def index():
    return render_template ('intro.html')

@app.route('/home/')
def home():
    return render_template ('home.html')

@app.route('/learn/')
def learn():
    return render_template ('learn.html')

@app.route('/quiz/')
def quiz():
    return render_template ('quiz.html')

@app.route('/fun/')
def fun():
    return render_template ('fun.html')