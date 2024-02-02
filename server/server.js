if (process.env.NODE_ENV !== "production") {
  const dotenv = require("dotenv").config();
}
const express = require("express");
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const path = require("path");
const eMate = require("ejs-mate");
const cors = require("cors");
const app = express();

app.engine("ejs", eMate);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(cors({ origin: "*" }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const jobRouter = require("./router/Jobs");

app.use("/jobs", jobRouter);

const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/jobportal";
const port = process.env.PORT || 6001;

main()
  .then(() => {
    console.log("Connection to DB successful");
  })
  .catch((err) => console.error(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.listen(port, () => {
  console.log(`Server responding at port:${port}`);
});
