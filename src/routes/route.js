const express= require('express')
const fruitandvegController= require('../controllers/fruitandvegController');

const router = express.Router();

router.get("/fruits-and-vegetables", fruitandvegController.getAllFruitsAndVegetables);
router.post("/fruits-and-vegetables/:name/order", fruitandvegController.calculateRate);
router.get("/fruits-and-vegetables/:name/rate", fruitandvegController.getRate);


router.all("/*", function (req, res) {
    res.status(400).send({status: false,message: "The api you request is not available"})
})
module.exports = router

