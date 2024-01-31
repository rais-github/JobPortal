const Joi = require('joi');

const jobSchema = Joi.object({
    job: Joi.object({
        jobTitle: Joi.string().required(),
        companyName: Joi.string().required(),
        minPrice: Joi.number().required().max(50),
        maxPrice: Joi.number().required().min(80),
        salaryType: Joi.string().valid('Hourly', 'Monthly', 'Yearly').required(),
        jobLocation: Joi.string().required(),
        postingDate: Joi.date().required(),
        experienceLevel: Joi.string().valid('No Experience', 'Internship', 'Work remotely').required(),
        requiredSkills: Joi.array().items(Joi.string()).required(),
        companyLogo: Joi.string().required(),
        employmentType: Joi.string().valid('Full-time', 'Part-time', 'Temporary').required(),
        description: Joi.string().max(500).required(),
        email: Joi.string().email().trim().lowercase().required(),
    }).required(),
});



module.exports = jobSchema;
