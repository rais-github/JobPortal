import Swal from 'sweetalert2'
import PageHeader from "../components/PageHeader"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Paper, Typography, Grid } from "@mui/material";

const API_BASE_URL = "http://localhost:8080/jobs";

const ShowJob = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});

  useEffect(() => {
    fetch(`${API_BASE_URL}/all-jobs/${id}`)
      .then((res) => res.json())
      .then((data) => setJob(data))
      .catch((error) => console.error("Error fetching job details:", error));
  }, [id]);

  const handleApply=async()=>{
    const { value: url } = await Swal.fire({
        input: "url",
        inputLabel: "URL address",
        inputPlaceholder: "Enter the URL"
      });
      if (url) {
        Swal.fire(`Entered URL: ${url}`);
      }
  }

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "auto",
        padding: "20px",
        display: "flex",
        flexDirection:"column",
        gap:"2rem",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
        <PageHeader  title={"Single Job Page"} path={"Single Job"}></PageHeader>
      <Paper
        style={{
          padding: "20px",
          backgroundColor: "#e6f7ff", // Change card color
          border: "1px solid #ddd",
          borderRadius: "12px",
          transition: "transform 0.3s ease, background-color 0.3s ease",
          cursor: "pointer",
        }}
        onMouseEnter={() => {
          document.getElementById("job-card").style.transform = "scale(1.05)";
          document.getElementById("job-card").style.backgroundColor = "#cce5ff"; // Change hover color
        }}
        onMouseLeave={() => {
          document.getElementById("job-card").style.transform = "scale(1)";
          document.getElementById("job-card").style.backgroundColor = "#e6f7ff"; // Change back to original color
        }}
        id="job-card"
      >
        <div    
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h4"
            style={{ color: "#1a53ff", marginRight: "20px" }}
          >
            {job.jobTitle}
          </Typography>
          {job.companyLogo && (
            <img
              src={job.companyLogo}
              alt="Company Logo"
              style={{
                maxWidth: "60px",
                maxHeight: "40px",
                borderRadius: "4px",
              }}
            />
          )}
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              <strong>Company:</strong> {job.companyName}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              <strong>Salary:</strong> {job.minSalary} - {job.maxSalary}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Location:</strong> {job.jobLocation}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Experience Level:</strong> {job.experienceLevel}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Employment Type:</strong> {job.employmentType}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Required Skills:</strong>{" "}
              {job.requiredSkills && job.requiredSkills.join(", ")}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Posted By:</strong> {job.postedByEmail}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Posting Date:</strong>{" "}
              {job.postingDate ? job.postingDate.slice(0, 10) : "N/A"}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Job Description:</strong> {job.jobDescription}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <button className="bg-red px-8 py-2 text-white" onClick={handleApply}>Apply Now</button>
    </div>
  );
};

export default ShowJob;
