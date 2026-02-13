const express = require("express");
const router = express.Router();

let orders=[
 {id:"ORD1001",user:"Kenish",total:200},
 {id:"ORD1002",user:"Rahul",total:500}
];

router.get("/",(req,res,next)=>{
 try{
   res.json(orders);
 }
 catch(err){
   next(err);
 }
});

router.post("/place",(req,res,next)=>{
 try{
   const newOrder={
     id:"ORD"+Date.now(),
     ...req.body
   };
   orders.push(newOrder);
   res.json({message:"Order placed",newOrder});
 }
 catch(err){
   next(err);
 }
});

module.exports = router;
