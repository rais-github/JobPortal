import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Banner({ query, handleInputChange }) {
  return (
    <div className="container mx-auto xl:px-24 px-4 md:py-20 py-14">
      <h1 className="font-bold text-4xl md:text-5xl text-primary mb-3">
        Find a <span className="text-red">new job</span> today
      </h1>

      <p className="mb-8 text-lg text-black/70">
        Thousands of jobs in technology, engineering sectors are waiting for you
      </p>

      <form>
        <div className="flex flex-col md:flex-row items-stretch">
          <div className="md:flex-grow flex items-stretch mb-4 md:mb-0">
            {/* Job Title input field */}
            <TextField
              InputProps={{
                startAdornment: <SearchIcon />,
              }}
              name="title"
              variant="outlined"
              required
              className="sm:text-sm sm:leading-6 flex-grow"
              placeholder="Job Title"
              value={query.title}
              onChange={handleInputChange}
            />
            &nbsp;
            {/* Location input field */}
            <TextField
              InputProps={{
                startAdornment: <LocationOnIcon />,
              }}
              name="location"
              variant="outlined"
              className="sm:text-sm sm:leading-6 flex-grow"
              placeholder="Location"
            />
          </div>
          &nbsp;
          {/* Search Button */}
          <Button variant="contained" color="error" className="md:w-auto w-full">
            <SearchIcon />
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Banner;
