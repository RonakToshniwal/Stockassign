import sqlite3
from urllib import response
from flask_cors import CORS
from flask import Flask, jsonify,make_response,render_template,request, url_for,redirect
import requests

con = sqlite3.connect('users.db')
print("Database connected")
cur = con.cursor()
con.execute('CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,age INTEGER)')
con.commit()
con.close()

app=Flask(__name__)
CORS(app)

key = "88e143bda89b4424aef8a3ad4dd67abf"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/user/new/', methods = ['POST'])
def addUser() :
    if request.method == 'POST':
        req = request.json
        name_data = req["name"]
        age_data = req["age"]

        con= sqlite3.connect('users.db')
        cur = con.cursor()
        cur.execute('INSERT INTO users values(NULL,?,?)',(name_data,age_data))
        con.commit()
        msg = "Data added successfully"
        con.close()

        response =  jsonify( {"message" : msg} )
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response  

@app.route('/stock/<name>/', methods = ['GET'])
def stockDetails(name) :
    url = f"https://api.twelvedata.com/quote?symbol={name}&apikey={key}"
    response = requests.get(url).json()
    return response


if __name__ == '__main__':
    app.run(debug=True)