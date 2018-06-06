var History=require('../models/historySchema');
var history=[];
  gethistory=(req, res)=>{   
  var username=req.body.username;
  console.log(username)
  History.find({"username":username},function(err,doc){
  	console.log(doc)
  	history=doc;}
  )  
  var input=history.map(history=>history.summary);  
  res.send(input);
}
module.exports=gethistory;