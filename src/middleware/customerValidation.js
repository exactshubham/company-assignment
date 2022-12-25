const uuid = require('uuid')
const customerModel = require("../models/customerModel")
const{isValidString,isValidName,isValidMobile,isValidDate,isValidEmail}=require("../util/validator")

exports.isValidRequest=async (req,res,next)=>{
    try{
    let requestBody=Object.keys(req.body)
    if(requestBody.length==0) {
        return res.status(400).send({status:false,message:"please provide some data for create customer"})
    }
    
    //checking_all_mandatory_fields
    let itsMandatory=["firstName","lastName","mobileNumber","DOB","emailID","status","address"]
     for (let i = 0; i < itsMandatory.length; i++) {
             if(!requestBody.includes(itsMandatory[i])){
             return res.status(400).send({status:true,message:`${itsMandatory[i]} is required`})
             }
     }

    const{ firstName,lastName,mobileNumber,DOB,emailID,address,status}=req.body
    if(firstName){
        if (!isValidString(firstName) || !isValidName(firstName)) {
            return res.status(400).send({ status: false, message: "please provide the valid firstName" })
          }
    }

    if(lastName){
        if (!isValidString(lastName) || !isValidName(lastName)) {
            return res.status(400).send({ status: false, message: "please provide the valid lastName" })
          }
    }

    if(mobileNumber){
        if (!isValidMobile(mobileNumber)) {
            return res.status(400).send({ status: false, message: "please provide the valid mobileNumber" })
          }
          let itsUnique=await customerModel.findOne({mobileNumber:mobileNumber})
          if(itsUnique) return res.status(400).send({status:false,message:"this number is already exists"})
    }

    if(DOB){
        if (!isValidDate(DOB)) {
            return res.status(400).send({ status: false, message: "please provide the valid DOB" })
          }
    }

    if(emailID){
        if (!isValidEmail(emailID)) {
            return res.status(400).send({ status: false, message: "please provide the valid emailID" })
          }
          let itsUnique=await customerModel.findOne({emailID:emailID})
          if(itsUnique) return res.status(400).send({status:false,message:"this emailID is already exists"})
    }

    if(address){
        if (!isValidString(address)) {
            return res.status(400).send({ status: false, message: "please provide the valid address" })
          }
    }

    if(status){
        if(status!="ACTIVE" || status!="INACTIVE"){
            return res.status(400).send({ status: false, message: "status should be only ACTIVE or INACTIVE" })
        }
    }
    //add the customerID in requestBody
   //A UUID is a Universally Unique Identifier .It is a 128-bit alpha-numeric that is unique. 
   req.body.customerID=uuid.v4()
   next()
}catch(err){
    return res.status(500).send({sattus:false,message:err.message})
}
}