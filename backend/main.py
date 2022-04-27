import json
import sqlite3
from urllib import response
from flask_cors import CORS
from flask import Flask, jsonify,make_response,render_template,request, url_for,redirect
import requests

con = sqlite3.connect('users.db')
print("Users Database connected")
cur = con.cursor()
con.execute('CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,age INTEGER)')
con.commit()
con.close()


con = sqlite3.connect('Stocks.db')
print("Stocks Database connected")
cur = con.cursor()
# con.execute('CREATE TABLE IF NOT EXISTS Stocks(id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,symbol TEXT)')
# cur.execute('INSERT INTO Stocks values(NULL,?,?)',("JPMorgan Chase & Co","JPM"))
# cur.execute('INSERT INTO Stocks values(NULL,?,?)',("S&P 500","SPX"))

# cur.execute('INSERT INTO Stocks values(NULL,?,?)',("American Assests Trust Inc","AAT"))
# cur.execute('INSERT INTO Stocks values(NULL,?,?)',("Tata Consultancy Services Limited","TCS"))
# cur.execute('INSERT INTO Stocks values(NULL,?,?)',("Microsoft Corporation","MSFT"))
# cur.execute('INSERT INTO Stocks values(NULL,?,?)',("Alphabet Inc","GOOG"))
# cur.execute('INSERT INTO Stocks values(NULL,?,?)',("KECK SENG Ltd.","KEC"))
# cur.execute('INSERT INTO Stocks values(NULL,?,?)',("RELIANCE WORLDWIDE ","0EU"))
# cur.execute('INSERT INTO Stocks values(NULL,?,?)',("Sea TV Network Ltd","SEATV"))
# cur.execute('INSERT INTO Stocks values(NULL,?,?)',("Champion Gaming Group Inc.","WAGR"))
# cur.execute('INSERT INTO Stocks values(NULL,?,?)',("WALMART INC.","WALMART"))
# cur.execute('INSERT INTO Stocks values(NULL,?,?)',("NIKE","NIKE34"))
# cur.execute('DELETE FROM Stocks where id > 20')
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

@app.route('/stock/all/',methods = ['GET'])
def showAllStocks():
    if request.method == 'GET':
        con = sqlite3.connect('Stocks.db')
        cur = con.cursor()
        cur.execute('SELECT * FROM Stocks')
        rows = cur.fetchall()
        data = {}
        for stock in rows:
            stock_symbol = stock[2]
            print(stock_symbol)
            url = f"https://api.twelvedata.com/price?symbol={stock_symbol}&apikey={key}"
            response = requests.get(url).json()
            # print(response)
            data[stock[1]] = response['price']
        print(data)
        con.close()
        return data

@app.route('/stock/<name>/', methods = ['GET'])
def stockDetails(name) :
    url = f"https://api.twelvedata.com/quote?symbol={name}&apikey={key}"
    response = requests.get(url).json()
    return response
    


if __name__ == '__main__':
    app.run(debug=True)