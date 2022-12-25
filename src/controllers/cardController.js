const cardModel = require('../models/cardModel');


const createCard = async (req, res) => {
    try {
        let data = req.body;
        const { cardType, customerName, status, vision, customerID } = data;

        if (!cardType) return res.status(400).send({ status: false, message: "please provide cardType" });
        if (!["REGULAR", "SPECIAL"].includes(cardType)) return res.status(400).send({ status: false, message: "cardType only can be REGULAR or SPECIAL" });
        if (!customerName) return res.status(400).send({ status: false, message: "please provide customerName" });
        if (!status) return res.status(400).send({ status: false, message: "please provide status" });
        if (!["ACTIVE", "INACTIVE"].includes(status)) return res.status(400).send({ status: false, message: "status only can be ACTIVE or INACTIVE" });
        if (!vision) return res.status(400).send({ status: false, message: "please provide vision" });
        if (!customerID) return res.status(400).send({ status: false, message: "please provide customerID" });

        const creating = await cardModel.create(data)
        creating._id= ID
       
            var updateData = await cardModel.findOneAndUpdate({ _id: ID, isDeleted: false },
                 { $inc: { cardNumber: 1 }}, { new: true }).select({ __v: 0 }).lean()
            
            let finalData = await cardModel.find(updateData).select({ isDeleted: 0, updatedAt: 0, createdAt: 0, __v: 0 });

        return res.status(201).send({ status: true, message: "Successfully created", data:finalData})
    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}

const getCard = async (req, res) => {
    try {
      const Cards= await cardModel.find()
      return res.status(200).send({status:false, allCards: Cards})
    
    } catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}

module.exports= {createCard,getCard}