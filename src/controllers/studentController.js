const studentModel = require("../models/studentModel")
const {isValidString,isValidName,isValidEmail,isValidPassword}=require("../util/validator")
const {hash,compare}=require("bcrypt")
exports.createStudent=async (req,res)=>{
    let requestBody = Object.keys(req.body)
        if (requestBody.length == 0) return res.status(400).send({ status: false, message: "please provide some data for create student" })
        let itsMandatory = ["name", "subject","marks","email","password"]
        itsMandatory.map((x) => {
            if (!requestBody.includes(x)) return res.status(400).send({ status: false, message: `${x} is mandatory` })
        })
       
        if(!isValidString(name)|| !isValidName(name)){
            return res.status(400).send({status:false,message:"plase provide valid student name"})
        }
        if(!isValidString(subject)|| !isValidName(subject)){
            return res.status(400).send({status:false,message:"plase provide valid subject name"})
        }
        if(typeof marks!="number"){
            return res.status(400).send({status:false,message:"marks should be in number"})
        }
        if(!isValidEmail(email)){
            return res.status(400).send({status:false,message:"please provide valid email"})
        }
        if(password){
            if(!isValidPassword(password)) return res.status(400).send({status:false,message:"please provide valid or strong password"})
            req.body.password=await hash(password,10)
        }
     let student=await studentModel.create(req.body)
    return res.status(201).send({status:true,message:"student created successfuly",data:student})
}


exports.loginStudent=async (req,res)=>{
    try{
    if (Object.keys(req.body).length == 0) return res.status(400).send({ status: false, message: "request body is empty !!" })
    const {email,password}=req.body

    if(!email) return res.status(400).send({status:false,message:"please provide the mobile Number"})
    if(!isValidEmail(email)) return res.status(400).send({status:false,message:"please provide the valid mobile Number"})
    let student=await studentModel.findOne({email})
    if(!student) return res.status(400).send({status:false,message:"this email is not exists in database"})
    if(!password) return res.status(400).send({status:false,message:"please provide the password"})
    let pass=await hash(password,student.password)
    if(!pass) return res.status(400).send({status:false,message:"Incorrect password !!"})

    let token =sign({studentId:student._id.toString()},`${process.env.SECREAT_KEY}`,{expiresIn:"5h"})
    let responceData={studentId:student._id,token:token}
    return res.status(200).send({status:true,message:"student login successfully",data:responceData })
    }catch(err){
        return res.status(500).send({status:false,message:err.message})
}
}