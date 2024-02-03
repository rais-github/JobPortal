// jobController.js
const asyncHandler = require("express-async-handler");
const jobSchema = require("../models/Jobs");
const mongoose = require("mongoose");

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

//Get a Job
exports.getJob = asyncHandler(async (req, res) => {
  try {
    const job = await jobSchema.findById(req.params.id);
    res.json(job);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Post a new job
exports.postJob = asyncHandler(async (req, res) => {
  const requiredProperties = [
    "jobTitle",
    "companyName",
    "minSalary",
    "maxSalary",
    "salaryType",
    "jobLocation",
    "postingDate",
    "experienceLevel",
    "requiredSkills",
    "companyLogo",
    "employmentType",
    "jobDescription",
    "postedByEmail",
  ];

  console.log("res**** ", req.body.job);

  // if (!requiredProperties.every(prop => req.body[])) {
  //   console.log("Missing required data for job posting:", req.body[]);
  //   return res.status(400).json({ error: "Missing required data for job posting" });
  // }
  console.log("data");
  try {
    const formInfo = {};
    requiredProperties.forEach((prop) => {
      prop !== "requiredSkills" ? (formInfo[prop] = req.body.job[prop]) : null;
    });
    console.log(req.body.job["experienceLevel"]);
    formInfo["requiredSkills"] = req.body.job["requiredSkills"].map(
      (skill) => skill.value
    );
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
});

exports.myJobs = asyncHandler(async (req, res) => {
  const jobs = await jobSchema.find({ postedByEmail: req.params.email });
  res.json(jobs);
});

//Update

exports.updateJob = asyncHandler(async (req, res) => {
  // console.log(req.body.job)
  const jobId = req.params.id;
  // console.log("JobID", jobId);//Debugging
  const filter = { _id: jobId };
  const update = { $set: { ...req.body.job } };

  if (!mongoose.Types.ObjectId.isValid(jobId)) {
    return res.status(400).json({ success: false, message: "Invalid job ID" });
  }

  try {
    const updatedJob = await jobSchema.findOneAndUpdate(filter, update, {
      new: true,
    });

    if (!updatedJob) {
      return res.status(404).json({ success: false, message: "Job not found" });
    }

    // console.log("Updated Job:", updatedJob);//Debugging
    res.status(200).json({ success: true, data: updatedJob });
  } catch (error) {
    console.error("Error updating job:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

exports.delJobs = asyncHandler(async (req, res) => {
  const jobs = await jobSchema.findByIdAndDelete(req.params.id);
  res.send(jobs);
});
