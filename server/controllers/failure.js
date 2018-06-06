var person=require('../models/personSchema');
failure=(req, res)=>{  
   res.send(false);
}
module.exports=failure;