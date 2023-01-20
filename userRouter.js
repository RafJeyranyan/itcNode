const express = require ("express")
const bodyParser = require("body-parser");
const userRouter = express.Router()
const addUser = require("./config/db").addUser

userRouter.use(bodyParser.urlencoded({ extended: false }));
userRouter.use(bodyParser.json())



userRouter.post("/",(req, res) =>{
    addUser(req.body)
    res.json(req.body.id)
    // console.log(req.body.id)
})

userRouter.post("/user",(req, res)=>{


})

module.exports = userRouter;