var express = require('express');
var router = express.Router();
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
var History=require('../models/historySchema');
  gethistory=(req, res)=>{   
  var username=req.body.username;
  console.log(username)
  var history =  History.find({"username":username})   
  console.log(history)
  var input=history.map(history=>history.summary);
  res.send(input);
}
module.exports=gethistory;