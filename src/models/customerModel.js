const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    mobileNumber: {
        type: String,
        unique: true,
        minlength:"10",
        maxlength:"10"
    },
    DOB: Date,
    emailID: {
        type: String,
        unique: true
    },
    address: String,
    status:{
        type: String,
        enum: ["ACTIVE", "INACTIVE"]},
    customerID: {
        type: String,
        unique: true }
    },{ timestamps: true })

module.exports = mongoose.model('Customer', customerSchema)
