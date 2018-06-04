var bodyParser = require('body-parser')
var passport = require('passport');
var express = require('express');
var app = express();
var  LocalStrategy = require('passport-local').Strategy;
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

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

app.post('/saveuserdata',(req, res) => {  
  console.log(req.body)
	var data = new person({
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