const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

const connectDB = require("./config/Db");

const app = express();
dotenv.config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 8080;
connectDB();

customCheck = (req, res, next) => {
  // console.log('I am here yo', req.body, req.query);

  next();
};

app.get("/", (req, res) => {
  res.send("Backend Working fine");
});


app.listen(port, () => {
  console.log("Listening to port", port);
});