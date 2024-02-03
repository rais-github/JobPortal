import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import {useParams, Link } from "react-router-dom";


const API_BASE_URL = "http://localhost:8080";

const MyJob = () => {
  const USER_EMAIL = "himanshu2003rai@gmail.com";
  const [jobs, setJobs] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchJobs = () => {
    setIsLoading(true);
    axios
      .get(`${API_BASE_URL}/jobs/my-job/${USER_EMAIL}`)
      .then((response) => {
        setJobs(response.data);
      })
      .catch((err) => {
        console.error("Error fetching jobs:", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchJobs();
  }, [searchText]);

  const handleSearch = () => {
    const myJobs = jobs.filter((job) =>
      job.jobTitle.toLowerCase().includes(searchText.toLowerCase())
    );
    setJobs(myJobs);
  };

  const handleDelete = (id) => {
    axios
      .delete(`${API_BASE_URL}/jobs/job/${id}`)
      .then((response) => {
          alert("Job Removed");
        fetchJobs();
      })
      .catch((err) => {
        console.error("Error deleting job:", err);
      });
  };

  return (
    <div className="container max-w-screen-2xl mx-auto flex flex-col items-center">
      <h1 className="text-center p-4 mt-2">JOBS</h1>
      <div className="flex flex-col gap-2 md:flex-row w-full md:w-[80%] lg:w-[80%] xl:w-[80%] mb-4">
        <TextField
          color="warning"
          name="search"
          label="Search Job"
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
          className="w-full md:w-3/4 lg:w-3/4 xl:w-3/4 md:mr-2"
        />
        <Button
          onClick={handleSearch}
          variant="outlined"
          color="error"
          className="w-full md:w-1/4 lg:w-1/4 xl:w-1/4 md:mt-0"
        >
          Search
        </Button>
      </div>

      <section className="py-1 bg-blueGray-50 w-full">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-base text-blueGray-700">
                    All Jobs
                  </h3>
                </div>
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  <a href="/post-job">
                    <button
                      className="bg-red text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Post a Job
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="items-center bg-transparent w-full border-collapse table-auto">
                <thead>
                  <tr>
                    <th className="w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      No.
                    </th>
                    <th className="w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Title
                    </th>
                    <th className="w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Company Name
                    </th>
                    <th className="w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Salary
                    </th>
                    <th className="w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Edit
                    </th>
                    <th className="w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Delete
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {jobs.map((job, idx) => (
                    <tr key={idx}>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                        {idx + 1}.
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {job.jobTitle}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {job.companyName}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {job.minSalary}-{job.maxSalary}k
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <Link to={`/edit-job/${job?._id}`}>
                          {" "}
                          <Button variant="text" color="secondary">
                            Edit
                          </Button>
                        </Link>
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <Button
                          onClick={() => handleDelete(job._id)}
                          variant="text"
                          color="warning"
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyJob;
