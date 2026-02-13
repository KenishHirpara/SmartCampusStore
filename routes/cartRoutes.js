const express = require("express");
const router = express.Router();

let cart=[
 {id:1,item:"Notebook",qty:2},
 {id:2,item:"Pen",qty:5}
];

router.get("/",(req,res,next)=>{
 try{
   res.json(cart);
 }
 catch(err){
   next(err);
 }
});

router.post("/add",(req,res,next)=>{
 try{
   const newItem={
     id:cart.length+1,
     ...req.body
   };
   cart.push(newItem);
   res.json({message:"Item added to cart",newItem});
 }
 catch(err){
   next(err);
 }
});

module.exports = router;
