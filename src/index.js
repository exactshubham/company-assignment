const express = require('express');
const app = express();
const mongoose =require('mongoose');
const route= require('./routes/route')


app.use(express.json());

mongoose.connect("mongodb+srv://ShubhamChaturvedi:9555047172@mongodbwithshubham.z3dowao.mongodb.net/test",{UseNewUrlParser:true}, mongoose.set('strictQuery', false))
.then(() => {console.log("MongoDb is Connected")})
.catch((err) => { console.log(err.message)})

app.use("/", route)
app.listen(process.env.PORT || 3000, () => {
     console.log("Express app running on PORT " + (3000 || process.env.PORT))
})