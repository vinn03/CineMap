from flask import Flask
import json

app = Flask(__name__)

with open("users.json", "r") as u:
    users = json.load(u)

with open("films.json", "r") as f:
    films = json.load(f)

@app.route("/user", methods=["GET"])
def get_user():
    return 

@app.route("/films")
def get_films():
    return "<p>Map</p>" 