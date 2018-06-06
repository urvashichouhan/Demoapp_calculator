var person=require('./models/personSchema');
var History=require('./models/historySchema');
var signup=require('./controllers/signup');
var history=require('./controllers/history');
var gethistory=require('./controllers/gethistory');
var gethistory=require('./controllers/gethistory');
var auth=require('./controllers/auth');
var success=require('./controllers/success');
var failure=require('./controllers/failure');
var express = require('express');
var app = express();
var cors=require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
mongoose.connect('mongodb://localhost:27017/my_db');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(cors({origin:'*'}));

app.post('/authenticatedata', auth);
app.use('/saveuserdata',signup);	
app.use('/savehistory', history);
app.use('/retrievehistory',gethistory);
app.get('/Failure', failure); 
app.get('/Success', success); 

app.listen(3030,function(){
	console.log("server is running...")
}); 
