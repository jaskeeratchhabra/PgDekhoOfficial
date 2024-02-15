const express=require("express");


const  app=express();

const dbConfig=require('./dbSetup');

const roomsRoute=require('./routes/roomsRoute')

app.use('/api/rooms',roomsRoute)

const port= process.env.PORT || 5000;
app.listen(port,()=> (console.log(`server runnning on port ${port}`)))
