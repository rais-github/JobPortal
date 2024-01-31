const express = require("express");
const mongoose = require('mongoose');
const path = require("path");
const eMate = require("ejs-mate");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.engine("ejs", eMate);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(cors({ origin: "*" }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));


const jobSchema  = require('./JoiSchema')

const MONGO_URL = "mongodb://127.0.0.1:27017/portal";
const port = process.env.PORT || 6001;


main()
  .then((res) => {
    console.log("Connection to DB successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/api", (req, res) => {
  res.status(201).json({ users: ["Himanshu", "Sudhanshu", "Priyanshu"] });
});

app.listen(port, () => {
  console.log(`Server responding at port:${port}`);
});
