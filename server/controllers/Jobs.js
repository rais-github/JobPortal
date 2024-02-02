// jobController.js
const asyncHandler = require("express-async-handler");
const jobSchema = require("../models/Jobs");

// Get all jobs
exports.getAllJobs = asyncHandler(async (req, res) => {
  try {
    const jobs = await jobSchema.find();
    res.json(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Post a new job
exports.postJob =   asyncHandler(async (req, res) => {
  const requiredProperties = [
    "jobTitle", "companyName", "minSalary", "maxSalary", "salaryType",
    "jobLocation", "postingDate", "experienceLevel","requiredSkills",
    "companyLogo", "employmentType", "jobDescription", "postedByEmail"
  ];
 
   console.log("res**** ", req.body.job);

  // if (!requiredProperties.every(prop => req.body[])) {
  //   console.log("Missing required data for job posting:", req.body[]);
  //   return res.status(400).json({ error: "Missing required data for job posting" });
  // }
console.log("data");
  try {
    const formInfo = {};
    requiredProperties.forEach(prop => {
      prop!=="requiredSkills" ? formInfo[prop] = req.body.job[prop]:null;
    });
    console.log(req.body.job["experienceLevel"]);
    formInfo["requiredSkills"]=req.body.job["requiredSkills"].map(skill=>(skill.value))
console.log(formInfo["requiredSkills"]);
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
