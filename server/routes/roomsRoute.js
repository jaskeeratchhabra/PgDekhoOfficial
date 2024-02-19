const express = require("express");
const router = express.Router();
const Room = require('../models/rooms');

router.get("/getallrooms", async (req, res) => {
    try {
        const rooms = await Room.find({});
        return res.send(rooms);
    } catch (error) {
        console.error("Error fetching all rooms:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
});

router.post("/getroombyid", async (req, res) => {
    const id = req.body.roomid;
    try {
        const room = await Room.findOne({_id:id});
        return res.send(room);
    } catch (error) {
        console.error("Error fetching room by ID:", error);
        return res.status(400).json({ error: error.message });
    }
});

module.exports = router;
