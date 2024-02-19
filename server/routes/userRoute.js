const  express=require("express");
const router=express.Router();

const User=require("../models/user.js");

router.post("/register", async (req,res)=>{
    const newuser=new User({
          name:req.body.name,
          phone:req.body.phone,
          password:req.body.password
        });
    try{
       const user =await newuser.save()
       res.send("User Registered SuccessFully");
    }
    catch(error){
         console.log(error.message);
        return res.status(400).json([error]);
    }
})


router.post("/login",async(req,res)=>{
    const {phone , password}=req.body;
    try{
        // console.log(req.body);
        const user=await User.findOne({phone,password});
        if(user){
            console.log("user found")
            res.send(user);
        }
        else{
        console.log("user not found")
        return res.status(400).json({message:"User Not Found"});4
       }
    }
    catch(error){
        console.log(error.message)
        return res.status(400).json([error]);
    }
    
})

module.exports=router