const express = require("express");
const router = express.Router();
const { validateProduct } = require("../middleware/validate");

let products = [
 { id: 1, name: "Notebook", price: 50 },
 { id: 2, name: "Pen", price: 20 },
 { id: 3, name: "Calculator", price: 500 }
];

router.get("/", (req,res,next)=>{
 try{
   res.json(products);
 }
 catch(err){
   next(err);
 }
});

router.post("/", validateProduct, (req,res,next)=>{
 try{
   const newProduct={
     id:products.length+1,
     ...req.body
   };
   products.push(newProduct);
   res.json({message:"Product added",newProduct});
 }
 catch(err){
   next(err);
 }
});

module.exports = router;
