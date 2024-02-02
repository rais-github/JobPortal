import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

function PostingDate({ radioChangeHandler }) {
  const now = new Date();
  const prev24Hrs = new Date(now - 24 * 60 * 60 * 1000);
  const prev7Days = new Date(now - 7 * 24 * 60 * 60 * 1000);
  const prev30Days = new Date(now - 30 * 24 * 60 * 60 * 1000);

  const formatDateToString = (date) => date.toISOString().slice(0, 10);

  return (
    <div>
      <h3 className="text-lg font-medium mb-3">Date of posting</h3>
      <FormControl>
        <RadioGroup onChange={radioChangeHandler} style={{ flexDirection: 'column' }}>
          <FormControlLabel value="" control={<Radio />} label="All time" />
          <FormControlLabel
            value={formatDateToString(prev24Hrs)}
            control={<Radio />}
            label="Last 24 hours"
          />
          <FormControlLabel
            value={formatDateToString(prev7Days)}
            control={<Radio />}
            label="Last 7 days"
          />
          <FormControlLabel
            value={formatDateToString(prev30Days)}
            control={<Radio />}
            label="Last month"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default PostingDate;
