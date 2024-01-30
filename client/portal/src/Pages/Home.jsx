import React from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Sidebar from "../Sidebar/Sidebar";
import Newsletter from "../components/Newsletter";
import { useState, useEffect } from "react";
import axios from "axios";
import Job from "./Job";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("jobs.json")
      .then((response) => {
        // console.log(response.data);
        setJobs(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  //Filter jobs based on title
  const filteredItems = jobs.filter((job) =>
    job.jobTitle.toLowerCase().includes(query.toLowerCase())
  );

  console.log("Filtered jobs on title", filteredItems);
  // Filter radio
  const radioChangeHandler = (event) => setSelectedCategory(event.target.value);
  // Filter group button
  const buttonChangeHandler = (event) =>
    setSelectedCategory(event.target.value);

  // Pagination
  function calculatePageRange() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  }

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Filtering function
  const filterdData = (query, jobs, selected) => {
    let filteredJobs = [...jobs];

    // Filter by job title
    if (query) {
      filteredJobs = filteredJobs.filter((job) =>
        job.jobTitle.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Filter by selected category (radio or button)
    if (selected && selected !== "All") {
      filteredJobs = filteredJobs.filter(
        (job) =>
          job.jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(job.maxPrice) === parseInt(selected) ||
          job.salaryType.toLowerCase() === selected.toLowerCase() ||
          job.experienceLevel.toLowerCase() === selected.toLowerCase() ||
          job.employmentType.toLowerCase() === selected.toLowerCase() ||
          job.postingDate >= selected
      );
    }
    const { startIndex, endIndex } = calculatePageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex);
    return filteredJobs.map((data, idx) => <Card key={idx} data={data} />);
  };
  // Usage example:
  const filteredDataResult = filterdData(query, jobs, selectedCategory);
  console.log("Filtered jobs on query,category", filteredDataResult);

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        <div className="bg-white p-4 rounded">
          <Sidebar
            radioChangeHandler={radioChangeHandler}
            buttonChangeHandler={buttonChangeHandler}
          ></Sidebar>
        </div>

        <div className="col-span-2 bg-white rounded-sm p-4">
          {isLoading ? (
            <p>loading...</p>
          ) : (
            <>
              <h2 className="text-2xl font-mono pl-[15rem]">
                {filteredDataResult.length} Jobs
              </h2>
              <Job filteredDataResult={filteredDataResult} />
            </>
          )}

          {filteredDataResult.length > 0 ? (
            <div className="flex justify-center mt-4 space-x-8">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="hover:underline"
              >
                Previous
              </button>
              <span className="mx-4">
                {currentPage} of{" "}
                {Math.ceil(filteredItems.length / itemsPerPage)} Pages
              </span>
              <button
                onClick={nextPage}
                disabled={
                  currentPage === Math.ceil(filteredItems.length / itemsPerPage)
                }
                className="hover:underline"
              >
                Next
              </button>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="bg-white p-4 rounded">
          <Newsletter/>
        </div>
      </div>
    </div>
  );
};

export default Home;
