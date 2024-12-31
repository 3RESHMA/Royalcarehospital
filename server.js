const express = require('express');
const cors = require('cors');
const app = express();
const mongoose=require('mongoose');

const routerurl = require('./router/router')

app.use(cors());
app.use(express.json());
app.use("/app",routerurl);

if(mongoose.connect("mongodb+srv://Priya3:Priya3@cluster0.p6qmh.mongodb.net/final25?retryWrites=true&w=majority&appName=Cluster0"))
{
    console.log("Database has connected in Atlas");
}







app.listen(8000,()=>
    {
        console.log('server is running on the port 8000');
    });