const mongoose= require("mongoose");

const username = encodeURIComponent("jkchhabra99");
const password = encodeURIComponent("Mummypapa10@");

const mongoURL=`mongodb+srv://${username}:${password}@cluster0.lucgdbn.mongodb.net/Rooms-db`;

mongoose.connect(mongoURL);

var connection =mongoose.connection

connection.on('error',()=> console.log("connection failed"))

connection.on('connected',()=> console.log("db connected"))

module.exports=mongoose;   