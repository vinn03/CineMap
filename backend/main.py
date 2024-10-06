from flask import Flask, request
from flask_cors import CORS, cross_origin
import json

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

with open("./models/users.json", "r") as u:
    users = json.load(u)

with open("./models/films.json", "r") as f:
    films = json.load(f)

@app.route("/user", methods=["GET"])
@cross_origin()
#find the name of the user with the given email
def get_user():
    called_email = request.args.get("email")
    print(f"Received email header: {called_email}")  # Debugging line
    for user in users:
        if user["email"] == called_email:
            user_return_value = {
                "email": user["email"],
                "display_name": user["display_name"],
                "films": user["films"],
                "posts": user["posts"]
            }
            return json.dumps(user_return_value)
    return json.dumps({"error": "User not found"}), 404


@app.route("/films", methods=["GET"])
@cross_origin()
#return films
def get_films():
    return json.dumps(films)
