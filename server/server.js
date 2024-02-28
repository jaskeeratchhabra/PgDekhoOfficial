const express=require("express");


const  app=express();

const dbConfig=require('./dbSetup');

const usersRoute=require("./routes/userRoute")

const roomsRoute=require('./routes/roomsRoute')

const bookingRoute=require("./routes/bookingRoute");

app.use(express.json());

app.use('/api/book',bookingRoute)

app.use('/api/users',usersRoute)
app.use('/api/rooms',roomsRoute)

const port= process.env.PORT || 5000;
app.listen(port,()=> (console.log(`server runnning on port ${port}`))) ;
