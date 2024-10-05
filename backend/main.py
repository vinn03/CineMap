from flask import Flask
import json

app = Flask(__name__)

with open("./models/users.json", "r") as u:
    users = json.load(u)

with open("./models/films.json", "r") as f:
    films = json.load(f)

@app.route("/user", methods=["GET"])
#find the name of the user with the given email
def get_user():
    return users

@app.route("/films", methods=["GET"])
#return films
def get_films():
    return "<p>Map</p>"