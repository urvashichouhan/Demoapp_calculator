var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/my_db');
// personSchema.statics.hashPassword = function hashPassword(password){
//   return bcrypt.hashSync(password,10);
// }
// personSchema.methods.validPassword = function(hashedpassword){
//   return  bcrypt.compareSync(hashedpassword, this.password);
// }
var Schema= mongoose.Schema;
var personSchema=new Schema({
  username: String,
  password: String,
  email: String,
  phone:Number
},{collection:'person'});
var person =mongoose.model('person',personSchema)
module.exports=person;