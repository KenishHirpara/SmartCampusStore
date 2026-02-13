const express=require("express");
const router=express.Router();
const {getOrders,placeOrder}=require("../controllers/orderController");

router.get("/",getOrders);
router.post("/place",placeOrder);

module.exports=router;
