const customerModel = require('../models/customerModel');

const createCustomer = async (req, res) => {
  try {
    const data = req.body

    const { emailID, mobileNumber, customerID } = data

    const check = await customerModel.findOne({ $or: [{ emailID }, { mobileNumber }, { customerID }] })

    if (check) {
      if (check.emailID == emailID) {
        return res.status(400).send({ status: false, message: "Email ID is not unique!" })
      }

      if (check.mobileNumber == mobileNumber) {
        return res.status(400).send({ status: false, message: "Mobile No. is not unique!" })
      }
      if (check.customerID == customerID) {
        return res.status(400).send({ status: false, message: "Customer ID is not unique!" })
      }
    }
    const createdData = await customerModel.create(data)
    res.status(201).send({ status: true, customer: createdData })
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message })
  }
}

const getCustomer = async (req, res) => {
  try {
    const customers = await customerModel.find({ status: 'ACTIVE' })
    return res.status(200).send({ customers })
  } catch (error) {
    return res.status(500).send({ status: false, message: err.message })
  }
}


const deleteCustomer = async (req, res) => {
  try {
    const delCustomer = await customerModel.findOneAndDelete({ isDeleted: true, upsert: true })
    return res.status(200).send({ status: true, message: "Successfully Deleted" })
  } catch (error) {
    return res.status(500).send({ status: false, message: err.message })
  }
}
module.exports = { createCustomer, getCustomer, deleteCustomer }