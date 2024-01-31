const mongoose = require("mongoose");
const { Schema } = mongoose;

function validateEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  }

const jobSchema = new Schema({
  jobTitle: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  minPrice: {
    type: Number,
    required: true,
    max: 50,
  },
  maxPrice: {
    type: Number,
    required: true,
    min:80
  },
  salaryType: {
    type: String,
    default: "Hourly",
    enum:["Hourly","Monthly","Yearly"],
    required: true,
  },
  jobLocation: {
    type: String,
    required: true,
  },
  postingDate: {
    type: Date,
    required: [true, "Please fill the date of this posting"],
  },
  experienceLevel: {
    type: String,
    enum:["No Experience","Internship","Work remotely"],
    required: true,
  },
  requiredSkills: {
    type: [String],
    required: true,
  },
  companyLogo: {
    type: String,
    required: true,
  },
  employmentType: {
    type: String,
    enum:["Full-time","Part-time","Temporary"],
    required: true,
  },
  description: {
    type: String,
    maxLength:500,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
    validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
});


const Job = mongoose.model("Job", jobSchema);
module.exports = Job;
