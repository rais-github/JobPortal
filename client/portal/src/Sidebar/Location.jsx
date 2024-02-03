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
        <RadioGroup onChange={radioChangeHandler} style={{ flexDirection: 'column' }}>
          <FormControlLabel value="All" control={<Radio />} label="All" />
          <FormControlLabel
            value="Pune"
            control={<Radio />}
            label="Pune"
          />
          <FormControlLabel
            value="Hyderabad"
            control={<Radio />}
            label="Hyderabad"
          />
          <FormControlLabel value="Bengaluru" control={<Radio />} label="Bengaluru" />
          <FormControlLabel value="Lucknow" control={<Radio />} label="Lucknow" />
          <FormControlLabel
            value="Delhi"
            control={<Radio />}
            label="Delhi"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
