from flask import Flask, request, json, jsonify
import pymongo
from bson import json_util

app = Flask(__name__)


client = pymongo.MongoClient("mongodb+srv://admin:arizonagreentea@hackmit2022.je3ysni.mongodb.net/")
db = client["HackMIT2022"]

@app.route("/createtask<task>" , methods=['GET','POST']) # may work?
def create_task(task):
    ''' input(Dict): the name(String) and an array of ids of the questions (Array of integers)
        output: None (Prefarably a status code)
    '''
    db["tasks"].insert_one(json.load(task))
    return 'success'


@app.route("/readtask/<name>",methods=['GET']) # works
def read_task(name):
    ''' input(String): the name of a task
        output(JSON): the name of the task and the ids to the questions
    '''
    col = db["tasks"]
    data = col.find_one({'name':name})
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



@app.route("/", methods=['GET','POST']) # test route
def hello_world():
    ''' prints the string "Hello, World!" for testing purposes
    '''
    return "Hello, World!"


app.run()