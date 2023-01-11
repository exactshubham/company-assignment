const express= require('express')
const studentController= require('../controllers/studentController');

const router = express.Router();
router.post("/createStudent", studentController.createStudent);
router.post("/loginStudent", studentController.loginStudent);


router.all("/*", function (req, res) {
    res.status(400).send({status: false,message: "The api you request is not available"})
})
module.exports = router

