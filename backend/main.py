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

@app.route("/film-post", methods=["POST"])
@cross_origin()
# update films
def update_films():
    new_film = request.json
    print(f"Received film header: {new_film}")  # Debugging line
    if new_film:
        try:
            films.append(new_film)
            with open("./models/films.json", "w") as f:
                json.dump(films, f, indent=4)
            return json.dumps({"success": True}), 200
        except json.JSONDecodeError:
            return json.dumps({"error": "Invalid JSON format"}), 400
    else:
        return json.dumps({"error": "No film data provided"}), 400
    
@app.route("/user-post", methods=["POST"])
@cross_origin()
# update user's posts
def update_user():
    req_post = request.json
    print(f"Received post header: {req_post}")
    if req_post:
        try:
            for user in users:
                if user["email"] == req_post["email"]:
                    new_post =  {
                        "movie_id": req_post["movie_id"],
                        "location_id": req_post["location_id"],
                        "review": req_post["review"]
                    }

                    user["posts"].append(new_post)                  

                    with open("./models/users.json", "w") as u:
                        json.dump(users, u, indent=4)
                    return json.dumps({"success": True}), 200
            return json.dumps({"error": "User not found"}), 404
        except json.JSONDecodeError:
            return json.dumps({"error": "Invalid JSON format"}), 400
    else:
        return json.dumps({"error": "No post data provided"}), 400
