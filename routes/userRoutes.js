const express = require("express");
const router = express.Router();

let users=[
 {id:1,name:"Kenish",email:"kenish@gmail.com"},
 {id:2,name:"Rahul",email:"rahul@gmail.com"}
];

router.get("/",(req,res,next)=>{
 try{
   res.json(users);
 }
 catch(err){
   next(err);
 }
});

router.post("/register",(req,res,next)=>{
 try{
   const newUser={
     id:users.length+1,
     ...req.body
   };
   users.push(newUser);
   res.json({message:"User registered",newUser});
 }
 catch(err){
   next(err);
 }
});

module.exports = router;
