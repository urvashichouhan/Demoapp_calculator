var person=require('../src/models/personSchema');
var History=require('../src/models/historySchema');
var signup=require('../src/controllers/signup');
var history=require('../src/controllers/history');
//var gethistory=require('../src/controllers/gethistory');
var gethistory=require('../src/controllers/gethistory');
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
app.use(cors({origin:'*'}));

passport.serializeUser(function(user, done) {
  done(null, user.id);
}); 
passport.deserializeUser(function(id, done) {
  person.findById(id, function (err, user) {
    done(err, user);
  });
});
passport.use(new LocalStrategy(
  function(username, password, done) {
    person.findOne({
      username: username
    }, function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false);
      }
      if (user.password != password) {
        return done(null, false);
      }
      return done(null, user);
    });
  }
));
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
app.use('/saveuserdata',signup);	
app.use('/savehistory', history);
  
 
app.post('/retrievehistory', async function(req, res){   
  var username=req.body.username;
  console.log(username)
  var history = await History.find({"username":username});    
  var input=history.map(history=>history.summary);
  res.send(input);
});
//app.use('/retrievehistory',gethistory);
app.listen(3030,function(){
	console.log("server is running...")
}); 
