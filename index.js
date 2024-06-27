// 1. import express
var express = require('express');
require('./connection');
const user = require('./model/user');

// 2.initialisation
var app = express();

// middleware
app.use(express.json())

// to add data to db
app.post('/add',async(req,res)=>{
    try {
        console.log(req)
        await user(req.body).save()
        res.send({message:"posted"})
    } catch (error) {
        console.log(error)
        
    }
})

// to view all users

app.get("/view",async(req,res)=>{
    try {
        const data = await user.find()
        res.send(data)
        
    } catch (error) {
        
    }
})

// to delete from database
app.delete("/remove/:id",async(req,res)=>{

    try {

        var data = await user.findByIdAndDelete(req.params.id)
        res.send({message:"deleted"})
        
    } catch (error) {
        console.log(error)
    }

})

// to update
app.put("/edit/:id",async(req,res)=>{

    try {
        
        var data = await user.findByIdAndUpdate(req.params.id,req.body)
        res.send({message:"updated",data})
    } catch (error) {
        console.log(error)
        
    }

})
// 3. api
// app.get('path',(request,response)=>{})

// app.get('/',(req,res)=>{
//     res.send("hello")

// app.get("/login",(req,res)=>{
//     res.send("login Succesfull")
// })

// 4.port allocation

app.listen(3000,()=>{
    console.log("port is running")
})

// to run: node index.js
// installing nodemon : npm i -g nodemon