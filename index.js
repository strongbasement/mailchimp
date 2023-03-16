var loginobj;
const express=require('express');
const bp=require('body-parser');
const app=express();
const request=require('request');
app.use(express.static(__dirname));
app.use(bp.urlencoded({urlencoded:true}));
app.get("/",(req,res)=>
{
   res.sendFile(__dirname+"/signin.html");
}
);

app.post("/",(req,res)=>{
loginobj={
  
   mail:req.body.mail,
   pass:req.body.pass
}
   var name=req.body.name;
   var mail=req.body.mail;
   var pass=req.body.pass;

   console.log(loginobj);
   

   

});
app.listen(3000,function()
{
   console.log('server is running on port 3000'); 
}
);

