const mongoose = require('mongoose')
const schema = mongoose.Schema({
    Name:String,
    Age:Number,
    Place:String,
    Phone:Number,
    Car : String,
    Colour : String
})

const userModel = mongoose.model('user',schema);
module.exports=userModel;