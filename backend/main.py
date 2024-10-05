from flask import Flask, request
import json

app = Flask(__name__)

with open("./models/users.json", "r") as u:
    users = json.load(u)

with open("./models/films.json", "r") as f:
    films = json.load(f)

@app.route("/user", methods=["GET"])
#find the name of the user with the given email
def get_user():
    #called_email = request.args.get("email")
    called_email = "janedoe@gmail.com"
    for user in users:
        if user["email"] == called_email:
            user_return_value = {
                "email": user["email"],
                "display_name": user["display_name"],
                "films": user["films"]
            }
            return json.dumps(user_return_value)

@app.route("/films", methods=["GET"])
#return films
def get_films():
    return json.dumps(films)