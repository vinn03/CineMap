from flask import Flask
import json

app = Flask(__name__)

with open("users.json", "r") as u:
    users = json.load(u)

with open("films.json", "r") as f:
    films = json.load(f)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/map")
def map():
    return "<p>Map</p>" 