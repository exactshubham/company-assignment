const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
    cardNumber: String, //Auto_increment e.g: C001
    cardType:{
        type: String,
        enum :["REGULAR","SPECIAL"]},
    customerName: String,
    status:{
        type: String,
        enum:["ACTIVE","INACTIVE"], 
        default: "ACTIVE" },
    vision :String,
    customerID: {
        type: String,
        ref:'Customer' }//Reference from customertable
})

module.exports= mongoose.model('cardModel', cardSchema)

