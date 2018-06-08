var person=require('../models/personSchema');
var passport = require('passport');
var  LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function(user, done) {
	console.log("user===", user);
  done(null, user.id);
}); 
passport.deserializeUser(function(id, done) {
	console.log("id===", id); 
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
auth=(req, res, next)=>{  
  console.log(req.body);
	passport.authenticate('local', {  successRedirect:'/Success',
    failureRedirect:'/Failure'}
  )(req,res,next); 
}

module.exports=auth;