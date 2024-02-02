const Joi = require('joi');

const jobSchema = Joi.object({
  jobTitle: Joi.string().required(),
  companyName: Joi.string().required(),
  minSalary: Joi.number().required().min(20), 
  maxSalary: Joi.number().required().max(150),
  salaryType: Joi.string().valid('Hourly', 'Monthly', 'Yearly').default('Hourly').required(),
  jobLocation: Joi.string().required(),
  postingDate: Joi.date().iso().required().error(new Error('Please fill the date of this posting')), // Custom error message
  experienceLevel: Joi.string().valid('No Experience', 'Internship', 'Work remotely').required(),
  requiredSkills: Joi.array().required(),
  companyLogo: Joi.string().required(),
  employmentType: Joi.string().valid('Full-time', 'Part-time', 'Temporary').required(),
  jobDescription: Joi.string().max(500).required(),
  postedByEmail: Joi.string().email().trim().lowercase().required(),
});

module.exports = jobSchema;
