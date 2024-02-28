const express = require("express");
const router = express.Router();
const Booking = require('../models/booking');


router.post("/bookroom",async(req,res)=>{
    const {
        room,
        roomid,
        userid,
        fromdate,
        todate,
        totalamount,
        totalmonths
    }=req.body
    try{
        const newbooking = new Booking({
            room,
            roomid,
            userid,
            fromdate,
            todate,
            totalamount,
            totalmonths,
            transactionId:"1234"
        })
        const booking = await newbooking.save()
        console.log("booking successfull")
        return res.send(booking);
    }
    catch(error){
        console.log(error.message);
    }
})
module.exports = router
