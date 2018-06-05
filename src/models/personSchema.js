var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

mongoose.connect('mongodb://localhost:27017/my_db');
var Schema= mongoose.Schema;
var personSchema=new Schema({
  username: String,
  password: String,
  email: {type:String,unique: true},
  phone:Number
},{collection:'person'});
personSchema.plugin(uniqueValidator);

var person =mongoose.model('person',personSchema)

module.exports=person;