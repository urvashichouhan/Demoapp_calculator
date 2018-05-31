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
  username:String,
  summary: String 
});
var History = mongoose.model("History", HistorySchema);
app.use(cors({origin:'*'}));


var personSchema= mongoose.Schema({
  username: String,
  password: String,
  email: String,
  phone:Number
});
personSchema.methods.validPassword = function (password) {
  if (password === this.password) {
    return true; 
  } else {
    return false;
  }
}
var Person = mongoose.model("Person", personSchema);
app.use(cors({origin:'*'}));
personSchema.statics.hashPassword = function hashPassword(password){
  return bcrypt.hashSync(password,10);
}
personSchema.methods.validPassword = function(hashedpassword){
  return  bcrypt.compareSync(hashedpassword, this.password);
}

passport.serializeUser(function(user, done) {
  done(null, user.id);
}); 
passport.deserializeUser(function(id, done) {
  Person.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(new LocalStrategy(function(username, password, done) {
  Person.findOne({ username: username }, function(err, user) {
    console.log(arguments);
    if (err) { 
      return done(err); 
    }
    if (!user) {
      return done(null, false, { message: 'Incorrect username.' });
    }
    if (!user.validPassword(password)) {
      return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, user);
  });
}));

app.post('/authenticatedata', 
  passport.authenticate('local', { successRedirect:'/Success',
    failureRedirect:'/Failure'}
  )
);
app.get('/Failure', (req, res) => {  
  res.send(false);
}); 
app.get('/Success', (req, res) => {
  res.send(true);
}); 

app.post('/saveuserdata', (req, res) => {  
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
app.post('/savehistory', (req, res) => {
  var data = new History({   
    username:req.body.data.username, 
    summary:req.body.data.summary
  })
  data.save()
  .then(data => {
    console.log(data);
    res.json(data);
  })  
}); 
app.post('/retrievehistory', async function(req, res){   
  var username=req.body.username;
  console.log(username)
  var history = await History.find({"username":username});    
  var input=history.map(history=>history.summary);
  res.send(input);
});
app.listen(3030,function(){
	console.log("server is running...")
}); 
