let products=[
 {id:1,name:"Notebook",price:50},
 {id:2,name:"Pen",price:20},
 {id:3,name:"Calculator",price:500}
];

exports.getProducts=(req,res,next)=>{
 try{
   res.json(products);
 }
 catch(err){
   next(err);
 }
};

exports.addProduct=(req,res,next)=>{
 try{
   const newProduct={id:products.length+1,...req.body};
   products.push(newProduct);
   res.json({message:"Product added",newProduct});
 }
 catch(err){
   next(err);
 }
};
