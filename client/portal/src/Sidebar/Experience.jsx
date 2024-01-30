import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
function Experience({radioChangeHandler}) {
  return (
    <div>
        <h3 className="text-lg font-medium mb-3">Work Experience</h3>
        <FormControl>
        <RadioGroup col onChange={radioChangeHandler}>
          <FormControlLabel value="Any experience" control={<Radio />} label="Any experience" />
          <FormControlLabel
            value={"Intership"}
            control={<Radio  />}
            label="Internship"
          />
          <FormControlLabel
            value={"Work remotely"}
            control={<Radio />}
            label="Work remotely"
          />
        </RadioGroup>
      </FormControl>
    </div>
  )
}

export default Experience;