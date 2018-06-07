var person=require('../models/personSchema');
signup=(req, res)=>{  
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
		res.send(true);

	})	
	.catch(err => {
		console.log("**************************")
	 res.send(false);
	 });
}




module.exports=signup;