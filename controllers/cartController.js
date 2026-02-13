let cart=[
 {id:1,item:"Notebook",qty:2},
 {id:2,item:"Pen",qty:5}
];

exports.getCart=(req,res,next)=>{
 try{
   res.json(cart);
 }
 catch(err){
   next(err);
 }
};

exports.addCart=(req,res,next)=>{
 try{
   const newItem={id:cart.length+1,...req.body};
   cart.push(newItem);
   res.json({message:"Item added",newItem});
 }
 catch(err){
   next(err);
 }
};
