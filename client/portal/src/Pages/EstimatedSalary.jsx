import React, { useState, useEffect } from "react";
import axios from "axios";
import PageHeader from "../components/PageHeader";

const EstimatedSalary = () => {
  const [searchText, setSearchText] = useState("");
  const [salary, setSalary] = useState([]);

  useEffect(() => {
    axios
      .get("salary.json")
      .then((resp) => {
        setSalary(resp.data);
      })
      .catch((err) => {
        console.log("Error in fetching salary:", err.message);
      });
  }, [searchText]);

  const handleSearch = () => {
    const filteredJobs = salary.filter((salary) =>
      salary.title.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(filteredJobs);
    setSalary(filteredJobs);
  };

  //   console.log(searchText);

  return (
    <div className="max-w-screen-2x1 container mx-auto xl:px-24 px-4">
      <PageHeader title={"Estimate Salary"} path={"Salary"} />

      <div className="mt-5">
        <div className="search-box p-2 text-center mb-2 space-x-2">
          <input
            type="text"
            name="search"
            id="search"
            className="py-2 px-3 border focus:outline-none w-6/12 mb-4"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="bg-red text-white font-semibold px-8 py-2 rounded mb-4"
          >
            Search
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 my-12 items-center">
        {salary.map((data) => (
          <div key={data.id} className="shadow px-4 py-8">
            <h4 className="font-semibold text-xl">{data.title}</h4>
            <p className="my-2 font-medium text-blue text-lg">{data.salary}</p>
            <div className="flex flex-wrap gap-4">
              <a href="/" className="underline">
                {data.status}
              </a>
              <a href="/" className="underline">
                {data.skills}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EstimatedSalary;
