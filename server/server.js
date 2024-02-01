if(process.env.NODE_ENV != "production"){
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

const validateJob = require('./middleware/validateJob');
const jobSchema = require("./models/Jobs");

const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/portal";
const port = process.env.PORT || 6001;

main()
  .then(() => {
    console.log("Connection to DB successful");
  })
  .catch((err) => console.error(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get(
  "/all-jobs",
  asyncHandler(async (req, res) => {
    try {
      const jobs = await jobSchema.find();
      res.json(jobs);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  })
);



app.post(
  "/post-job",validateJob,
  asyncHandler(async (req, res) => {
    const requiredProperties = [
      "jobTitle", "companyName", "minSalary", "maxSalary", "salaryType",
      "jobLocation", "postingDate", "experienceLevel", "requiredSkills",
      "companyLogo", "employmentType", "jobDescription", "postedByEmail"
    ];

    if (!requiredProperties.every(prop => req.body[prop])) {
      console.log("Missing required data for job posting:", req.body);
      return res.status(400).json({ error: "Missing required data for job posting" });
    }

    try {
      const formInfo = {};
      requiredProperties.forEach(prop => {
        formInfo[prop] = req.body[prop];
      });

      // Add debug logging
      console.log("Form data:", formInfo);

      const newJob = new jobSchema(formInfo);
      await newJob.save();
      res.status(201).json({ success: "Job posted successfully" });
    } catch (error) {
      // Add debug logging
      console.error("Error posting job:", error.message);

      res.status(500).json({ error: "Internal Server Error" });
    }
  })
);





app.listen(port, () => {
  console.log(`Server responding at port:${port}`);
});