import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
function Employment({radioChangeHandler}) {
  return (
    <div>
        <h3 className="text-lg font-medium mb-3">Type of Employment</h3>
        <FormControl>
        <RadioGroup col onChange={radioChangeHandler}>
          <FormControlLabel value="" control={<Radio />} label="Any" />
          <FormControlLabel
            value={"Full-time"}
            control={<Radio  />}
            label="Full-time"
          />
          <FormControlLabel
            value={"Temporary"}
            control={<Radio />}
            label="Temporary"
          />
          <FormControlLabel
            value={"Part-time"}
            control={<Radio />}
            label="Part-time"
          />
        </RadioGroup>
      </FormControl>
    </div>
  )
}

export default Employment;