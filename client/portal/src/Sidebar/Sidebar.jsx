import React from "react";
import Location from "./Location";
import Salary from "./Salary";
import PostingDate from './PostingDate';
import Experience from "./Experience";
import Employment from "./Employment"

const Sidebar = ({ radioChangeHandler, buttonChangeHandler }) => {
  return (
    <div className="space-y-5">
      <h3 className="text-lg font-bold mb-2">Filters</h3>
      <Location radioChangeHandler={radioChangeHandler}></Location>
      <Salary radioChangeHandler={radioChangeHandler} buttonChangeHandler={buttonChangeHandler}/>
      <PostingDate radioChangeHandler={radioChangeHandler}></PostingDate>
      <Experience radioChangeHandler={radioChangeHandler}/>
      <Employment radioChangeHandler={radioChangeHandler}></Employment>
    </div>
  );
};

export default Sidebar;
