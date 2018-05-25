var express = require('express');
var app = express();
var cors=require('cors');
var bodyParser = require('body-parser')
var passport = require('passport');
var  LocalStrategy = require('passport-local').Strategy;
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/my_db');

var HistorySchema = mongoose.Schema({
    inputCalculation: String,
    summary: String 
});
var History = mongoose.model("History", HistorySchema);
app.use(cors({origin:'*'}));


var personSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    phone:Number
});
var Person = mongoose.model("Person", personSchema);
app.use(cors({origin:'*'}));

passport.serializeUser(function(user, done) {
  done(null, user.id);
}); 
passport.deserializeUser(function(id, done) {
  Person.findById(id, function (err, user) {
    done(err, user);
  });
});
passport.use(new LocalStrategy(
  function(username, password, done) {
    console.log(username)
    console.log(password)
    Person.findOne({ 
      username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.password) { return done(null, false); }
      return done(null, user);
    });
  }
));

app.post('/hello1', 
  passport.authenticate('local', { successRedirect:'/Signup',
    failureRedirect:'/Login'}
  )
);
app.get('/Login', (req, res) => {
  res.send(false);
}); 
app.get('/Signup', (req, res) => {
  res.send(true);
}); 


app.post('/hello', (req, res) => {
  
	var data = new Person({
		username:req.body.data.username,
		password:req.body.data.password,
		email:req.body.data.email,
		phone:req.body.data.phone
	})
	data.save()
	.then(data => {
		console.log(data);
		res.json(data);
	})	
});	
app.post('/hello2', (req, res) => {
  var data1 = new History({
    inputCalculation: req.body.data1.inputCalculation,
    summary:req.body.data1.summary
  })
  data1.save()
  .then(data => {
    console.log(data1);
    res.json(data1);
  })  
}); 
app.get('/hello3', async function(req, res){   
  var history = await History.find();
  console.log("---------------------------", history);
  var input=history.map(history=>history.inputCalculation);
  console.log(">>>>>>"+input)
  res.send(history);
});
app.listen(3030,function(){
	console.log("server is running...")
});
