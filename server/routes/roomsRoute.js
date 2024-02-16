const express=require("express");

const router=express.Router();

const Room=require('../models/rooms')


router.get("/getallrooms", async(req,res)=>{
    
    try{
        const rooms=await Room.find({});
        return res.send(rooms);
    }
    catch(error){
        return res.status(400).json({message:error});
    }
});
router.post("/getroombyid", async(req,res)=>{
    // console.log({roomid});
 
    const roomid=req.body; 

    try{
        const room=await Room.findOne({_id:roomid});
        return res.send(room);
    }
    catch(error){
        console.log(error.message)
        console.log("hey")
        return res.status(400).json({message:error});
    }
    
});


module.exports=router;