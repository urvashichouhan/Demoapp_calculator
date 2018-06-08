var History=require('../models/historySchema');
var history=[];
gethistory= async(req, res)=>{   
  var username=req.query.username;
  console.log(username);
  const history = await History.find({"username":username});
  var input=history.map(history=>history.summary);  
  res.send(input);
}
module.exports=gethistory;