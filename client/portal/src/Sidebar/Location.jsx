import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export default function Location({ radioChangeHandler }) {
  return (
    <div>
      <h3 className="text-lg font-medium mb-2">Locations</h3>
      <FormControl>
        <RadioGroup col onChange={radioChangeHandler}>
          <FormControlLabel value="All" control={<Radio />} label="All" />
          <FormControlLabel
            value="Seattle"
            control={<Radio  />}
            label="Seattle"
          />
          <FormControlLabel
            value="San Francisco"
            control={<Radio />}
            label="San Francisco"
          />
          <FormControlLabel value="Boston" control={<Radio />} label="Boston" />
          <FormControlLabel value="London" control={<Radio />} label="London" />
          <FormControlLabel
            value="Brussels"
            control={<Radio />}
            label="Brussels"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
