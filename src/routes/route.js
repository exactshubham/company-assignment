const express= require('express')
const customerController= require('../controllers/customerController');
const cardController= require("../controllers/cardController");
const {isValidRequest}=require("../middleware/customerValidation");
const router = express.Router();
router.post("/createCustomer", isValidRequest, customerController.createCustomer);
router.get("/getCustomer", customerController.getCustomer);
router.delete("/delCustomer", customerController.deleteCustomer);

router.post("/createCard", cardController.createCard );
router.get("/getCard", cardController.getCard );


router.all("/*", function (req, res) {
    res.status(400).send({status: false,message: "The api you request is not available"})
})
module.exports = router

