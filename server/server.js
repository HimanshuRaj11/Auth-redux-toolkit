const express = require("express");
const app = express();
require('dotenv').config()
const userRouter = require("./routers/userRouter");
require("./db/conn")
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({extended:true}))
app.use(cookieParser())

app.get('/',(req,res)=>{
  res.send("runing...")
})

app.use('/auth/',userRouter)

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server on port: ${port}`);
})