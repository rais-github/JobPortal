
const mongoose = require("mongoose");
const { Schema } = mongoose;

const jobSchema = new Schema({
  jobTitle: { type: String, required: true },
  companyName: { type: String, required: true },
  minSalary: { type: Number, required: true, min: 20 },
  maxSalary: { type: Number, required: true, max: 150 },
  salaryType: {
    type: String,
    default: "Hourly",
    enum: ["Hourly", "Monthly", "Yearly"],
    required: true,
  },
  jobLocation: { type: String, required: true },
  postingDate: {
    type: Date,
    required: [true, "Please fill the date of this posting"],
    
  },
  experienceLevel: {
    type: String,
    enum: ["No Experience", "Internship", "Work remotely"],
    required: true,
  },
  requiredSkills: { type: [String], required: true },
  companyLogo: { type: String, required: true },
  employmentType: {
    type: String,
    enum: ["Full-time", "Part-time", "Temporary"],
    required: true,
  },
  jobDescription: { type: String, maxLength: 500, required: true },
  postedByEmail: {
    type: String,
    trim: true,
    lowercase: true,
    required: [true, "Email address is required"],
  }
  
});

const Job = mongoose.model("Job", jobSchema);
module.exports = Job;
