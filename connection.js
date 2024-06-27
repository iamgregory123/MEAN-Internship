// import mongoose

const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://Gregory:Kunnamkulam123@cluster0.yiubpfy.mongodb.net/Mean?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected to db")
})
.catch((error)=>{
    console.log(error)
})
