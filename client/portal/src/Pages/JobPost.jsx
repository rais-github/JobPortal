import React, { useState } from "react";
import Select from "react-select";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

const skillOptions = [
  {
    value: "JavaScript",
    label: "JavaScript",
  },
  {
    value: "ReactJs",
    label: "ReactJs",
  },
  {
    value: "React Native",
    label: "React Native",
  },
  {
    value: "NodeJs",
    label: "NodeJs",
  },
  {
    value: "ExpressJs",
    label: "ExpressJs",
  },
  {
    value: "MongoDb",
    label: "MongoDb",
  },
  {
    value: "HTML",
    label: "HTML",
  },
  {
    value: "CSS",
    label: "CSS",
  },
  {
    value: "Bootstrap",
    label: "Bootstrap",
  },
  {
    value: "Tailwind",
    label: "Tailwind",
  },
  {
    value: "Material UI",
    label: "Material UI",
  },
  {
    value: "VueJs",
    label: "VueJs",
  },
  {
    value: "Angular",
    label: "Angular",
  },
  {
    value: "Sass",
    label: "Sass",
  },
  {
    value: "Django",
    label: "Django",
  },
  {
    value: "Flask",
    label: "Flask",
  },
  {
    value: "Python",
    label: "Python",
  },
  {
    value: "Java",
    label: "Java",
  },
  {
    value: "C#",
    label: "C#",
  },
  {
    value: "MySQL",
    label: "MySQL",
  },
  {
    value: "PostgreSQL",
    label: "PostgreSQL",
  },
  {
    value: "Git",
    label: "Git",
  },
  // More entries below
  {
    value: "Redux",
    label: "Redux",
  },
  {
    value: "TypeScript",
    label: "TypeScript",
  },
  {
    value: "GraphQL",
    label: "GraphQL",
  },
  {
    value: "AWS",
    label: "AWS",
  },
  {
    value: "Docker",
    label: "Docker",
  },
  {
    value: "Kubernetes",
    label: "Kubernetes",
  },
  {
    value: "Jenkins",
    label: "Jenkins",
  },
  {
    value: "CI/CD",
    label: "CI/CD",
  },
  // Add as many as you need
];


const JobPost = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    minSalary: 0,
    maxSalary: 0,
    salaryType: "hourly",
    jobLocation: "",
    postingDate: "",
    experienceLevel: "No experience",
    requiredSkills: [],
    companyLogo: "",
    employmentType: "Full time",
    jobDescription: "",
    postedByEmail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSkillsChange = (selectedSkills) => {
    setFormData({ ...formData, requiredSkills: selectedSkills });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/post-job", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ job: formData }),
      }); 
  
      if (response.ok) {
        console.log("Job posted successfully");
      } else {
        console.error("Failed to post job");
      }
    } catch (error) {
      console.error("Error posting job", error);
    }
  
    setFormData({
      jobTitle: "",
      companyName: "",
      minSalary: 0,
      maxSalary: 0,
      salaryType: "hourly",
      jobLocation: "",
      postingDate: "",
      experienceLevel: "No experience",
      requiredSkills: [],
      companyLogo: "",
      employmentType: "Full time",
      jobDescription: "",
      postedByEmail: "",
    });
    console.log(formData);
  };

  return (
    <div className="bg-[#FAFAFA] mr-4 ml-4">
      <form className="space-x-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="jobTitle"
            >
              Job Title
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
              id="jobTitle"
              type="text"
              placeholder="Enter job title"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="companyName"
            >
              Company Name
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
              id="companyName"
              type="text"
              placeholder="Enter company name"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="minSalary"
            >
              Minimum Salary
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
              id="minSalary"
              type="text"
              placeholder="Enter minimum salary"
              name="minSalary"
              value={formData.minSalary}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="maxSalary"
            >
              Maximum Salary
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
              id="maxSalary"
              type="text"
              placeholder="Enter maximum salary"
              name="maxSalary"
              value={formData.maxSalary}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="salaryType"
            >
              Salary Type
            </label>
            <select
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
              id="salaryType"
              name="salaryType"
              value={formData.salaryType}
              onChange={handleChange}
            >
              <option value="hourly">Hourly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="jobLocation"
            >
              Job Location
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
              id="jobLocation"
              type="text"
              placeholder="Enter job location"
              name="jobLocation"
              value={formData.jobLocation}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="postingDate"
            >
              Job Posting Date
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
              id="postingDate"
              type="date"
              name="postingDate"
              value={formData.postingDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="experienceLevel"
            >
              Experience Level
            </label>
            <select
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
              id="experienceLevel"
              name="experienceLevel"
              value={formData.experienceLevel}
              onChange={handleChange}
            >
              <option value="No experience">No experience</option>
              <option value="Internship">Internship</option>
              <option value="Work remotely">Work remotely</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="requiredSkills"
            >
              Required Skills
            </label>
            <Select
              isMulti
              options={skillOptions}
              id="requiredSkills"
              value={formData.requiredSkills}
              onChange={handleSkillsChange}
              name="requiredSkills"
              
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="companyLogo"
            >
              Company Logo (URL)
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
              id="companyLogo"
              type="url"
              placeholder="Enter company logo URL"
              name="companyLogo"
              value={formData.companyLogo}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="employmentType"
            >
              Employment Type
            </label>
            <select
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
              id="employmentType"
              name="employmentType"
              value={formData.employmentType}
              onChange={handleChange}
            >
              <option value="Full time">Full time</option>
              <option value="Part time">Part time</option>
              <option value="Temporary">Temporary</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="jobDescription"
            >
              Job Description
            </label>
            <textarea
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
              id="jobDescription"
              placeholder="Enter job description"
              name="jobDescription"
              value={formData.jobDescription}
              onChange={handleChange}
              required
            />
          </div>

          <div className=" ml-4 mb-4 w-[90rem]">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="postedByEmail"
            >
              Job Posted By (Email)
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
              id="postedByEmail"
              type="email"
              placeholder="example@example.com"
              name="postedByEmail"
              value={formData.postedByEmail}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="flex items-center justify-center mt-4">
          <Button
            type="submit"
            endIcon={<SendIcon />}
            variant="contained"
            color="error"
            size="small"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default JobPost;
