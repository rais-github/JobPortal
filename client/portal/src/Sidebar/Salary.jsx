import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const Salary = ({ radioChangeHandler, buttonChangeHandler }) => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-3">Salary</h3>
      <ButtonGroup className='mb-4' color='error' variant="outlined" aria-label="outlined primary button group">
        <Button onClick={buttonChangeHandler} value="" >Hourly</Button>
        <Button onClick={buttonChangeHandler} value="Monthly" >Monthly</Button>
        <Button onClick={buttonChangeHandler} value="Yearly" >Yearly</Button>
      </ButtonGroup>
      <FormControl>
        <RadioGroup col onChange={radioChangeHandler}>
          <FormControlLabel value="" control={<Radio />} label="Any" />
          <FormControlLabel
            value={30}
            control={<Radio  />}
            label="<30000k"
          />
          <FormControlLabel
            value={50}
            control={<Radio />}
            label="<50000k"
          />
          <FormControlLabel value={80} control={<Radio />} label="<80000k" />
          <FormControlLabel value={120} control={<Radio />} label="<120000k" />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Salary;
