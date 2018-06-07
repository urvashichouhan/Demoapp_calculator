var History=require('../models/historySchema');
history=(req, res)=>{  
  var data = new History({   
    username:req.body.data.username, 
    summary:req.body.data.summary
  })
  data.save()
  .then(data => {
    console.log(data);
    res.json(data); 
  })  
}
module.exports=history;