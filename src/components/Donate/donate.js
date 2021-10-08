import React from "react";
// import { getCurrentUser } from "../../utils/auth";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import "./donate.css";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
const DonatePage = () => {
  // const { name } = getCurrentUser();

  return (
    <div class="container">
      <div class="donation form">
        <h2>Donate an Organ</h2>
        <h3>Donor details</h3>

        <FormControl action="no action.php" id="Donate">
          <div class="form-group">
            <TextField
              id="donor-name"
              className="full-width"
              label="Donor Name"
              variant="filled"
            />
          </div>
          <div class="form-group flex ">
            <TextField
              className="donor-age"
              id="donor-age"
              label="Donor Age"
              variant="filled"
            />
            <TextField
              className="blood-group"
              id="blood-group"
              label="Blood Group"
              variant="filled"
            />
          </div>
          <div class="form-group">
            <TextField
              id="organ"
              className="full-width"
              label="Select an Organ"
              variant="filled"
            />
          </div>
          <FormControl>
          <InputLabel id="condition-select">Condition of organ</InputLabel>
          <div class="form-group">
            <Select
              labelId="condition-select"
              id="condition"
              className="full-width"
              variant="filled"
            >
              <MenuItem value="new">NEW</MenuItem>
              <MenuItem value="old">OLD</MenuItem>
              <MenuItem value="good">GOOD</MenuItem>
              <MenuItem value="bad">BAD</MenuItem>
              </Select>
          </div>
          </FormControl>
          <div class="form-group">
            <Button
              className="upload-container"
              variant="outlined"
              component="span"
              startIcon={<FileUploadOutlinedIcon />}
            >
              Upload Prescription
            </Button>
          </div>
          <div class="form-group">
            <Button
              className="upload-container"
              variant="outlined"
              component="span"
            >
              Next
            </Button>
          </div>
          {/* <button class="btn">Next</button> */}
        </FormControl>
      </div>
    </div>
  );
};
export default DonatePage;
