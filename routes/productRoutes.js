const express=require("express");
const router=express.Router();
const {validateProduct}=require("../middleware/validate");
const {getProducts,addProduct}=require("../controllers/productController");

router.get("/",getProducts);
router.post("/",validateProduct,addProduct);

module.exports=router;
