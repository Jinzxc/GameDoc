from flask import Flask, request, json, jsonify
import pymongo
from bson import json_util
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


client = pymongo.MongoClient("mongodb+srv://admin:arizonagreentea@hackmit2022.je3ysni.mongodb.net/")
db = client["HackMIT2022"]

@app.route("/createtask/<task>" , methods=['GET','POST']) # may work?
def create_task(task):
    ''' input(Dict): the name(String) and an array of ids of the questions (Array of integers)
        output: None (Prefarably a status code)
    '''
    db["tasks"].insert_one(json.load(task))
    return 'success'


@app.route("/readtask/<name>",methods=['GET']) # works
def read_task(id):
    ''' input(String): the name of a task
        output(JSON): the name of the task and the ids to the questions
    '''
    col = db["tasks"]
    data = col.find_one({'id':id})
    return json.loads(json_util.dumps(data))



@app.route("/readquestion/<id>",methods=['GET']) # this works
def read_question(id):
    ''' input(String): the id of the question
        output(JSON): the id (str), question (str), answer (str), points (int), choices (array) of the question
    '''
    col = db["questions"]
    data = col.find_one({'id':id})
    return json.loads(json_util.dumps(data))



@app.route("/createquestion/<question>",methods=["GET","POST"]) # works i guess
def create_question(question):
    ''' input(Dict): a dictionary with the id (str), question (str), answer (str), points (int), choices (array) of the question
        output: None (prefarably a status code)
    '''
    db["questions"].insert_one(json.loads(question))
    return 'success'



@app.route("/readalltasks",methods=['GET']) # ???
def read_all_tasks():
    ''' input: None
        output(JSON): all of the available tasks and their respective data
    '''
    col = db["tasks"]

    return list(json.loads(json_util.dumps(col.find({}))))



@app.route("/getuser/<name>",methods=["GET"])
def get_user(name):
    ''' input(String): the name of the user (currently there is only user1)
        output(JSON): the data of the respective user (name(str) and score(int))
    '''
    col = db["user_data"]
    data = col.find_one({'name':name})
    return json.loads(json_util.dumps(data))



@app.route("/getscore/<name>",methods=["GET"])
def get_score(name):
    ''' input(String): the name of the user (currently there is only user1)
        output(list): a single-length list containing the score of the user(int)
    '''
    score = get_user(name)['score']
    return [score]



@app.route("/addscore/<name>/<value>",methods=["PATCH"])
def add_score(name,value):
    ''' input(name=String, value=String): the name of the user and the score to be added
        output: None ('ok' is dispplayed if the method worked)
    '''
    col = db["user_data"]
    
    col.update_one({'name':name},{"$set":{"score": get_score(name)[0] + int(value)}},upsert=False)
    return "ok"



@app.route("/", methods=['GET','POST']) # test route
def hello_world():
    ''' prints the string "Hello, World!" for testing purposes
    '''
    return "Hello, World!"


app.run()
