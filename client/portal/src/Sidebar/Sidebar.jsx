import React from "react";
import Location from "./Location";
const Sidebar = ({ radioChangeHandler, buttonChangeHandler }) => {
  return (
    <div className="space-y-5">
      <h3 className="text-lg font-bold mb-2">Filters</h3>
      <Location radioChangeHandler={radioChangeHandler}></Location>
    </div>
  );
};

export default Sidebar;
