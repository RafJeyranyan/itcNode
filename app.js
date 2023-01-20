const express = require("express");
const userRouter = require("./userRouter");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
const initSequalize = require("./config/db").initSequalize



initSequalize();


app.use("/user", userRouter)

app.listen(3000)


