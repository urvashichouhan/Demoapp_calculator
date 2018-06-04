var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/my_db');
var Schema= mongoose.Schema;
var HistorySchema = new Schema({
  username:String,
  summary: String 
});
var History = mongoose.model("History", HistorySchema);
module.exports=History;