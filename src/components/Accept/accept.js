import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import "./accept.scss";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import CancelPresentationFilledIcon from "@mui/icons-material/CancelPresentationTwoTone";
import Button from "@mui/material/Button";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import Header from "../Header";
import { fetchHospitals } from "../../services/index";
import { getUser } from "../../utils/auth";
import { GET_UN_AUTH, POST_UN_AUTH } from "../../utils/http";

const Input = styled("input")({
  display: "none",
});

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, age, prescription, bloodgroup, acceptreject) {
  return { name, age, prescription, bloodgroup, acceptreject };
}

const rows = [
  createData(
    "Fortis",
    56,
    <div>
      <label htmlFor="contained-button-file1">
        <Input id="contained-button-file1" multiple type="file" />
        <FileUploadOutlinedIcon style={{ color: "black", cursor: "pointer" }} />
      </label>
    </div>,
    "B+",
    <div>
      <Button className="accept">
        <CheckBoxRoundedIcon style={{ fill: "#08E72B" }} />
      </Button>
      <Button className="reject">
        <CancelPresentationFilledIcon style={{ fill: "#B11005" }} />
      </Button>
    </div>
  ),
  createData(
    "Fortis",
    65,
    <div>
      <label htmlFor="contained-button-file2">
        <Input id="contained-button-file2" multiple type="file" />
        <FileUploadOutlinedIcon style={{ color: "black", cursor: "pointer" }} />
      </label>
    </div>,
    "O-",
    <div>
      <Button className="accept">
        <CheckBoxRoundedIcon style={{ fill: "#08E72B" }} />
      </Button>
      <Button className="reject">
        <CancelPresentationFilledIcon style={{ fill: "#B11005" }} />
      </Button>
    </div>
  ),
  createData(
    "Fortis",
    80,
    <div>
      <label htmlFor="contained-button-file3">
        <Input id="contained-button-file3" multiple type="file" />
        <FileUploadOutlinedIcon style={{ color: "black", cursor: "pointer" }} />
      </label>
    </div>,
    "AB+",
    <div>
      <Button className="accept">
        <CheckBoxRoundedIcon style={{ fill: "#08E72B" }} />
      </Button>
      <Button className="reject">
        <CancelPresentationFilledIcon style={{ fill: "#B11005" }} />
      </Button>
    </div>
  ),
  createData(
    "Fortis",
    28,
    <div>
      <label htmlFor="contained-button-file4">
        <Input id="contained-button-file4" multiple type="file" />
        <FileUploadOutlinedIcon style={{ color: "black", cursor: "pointer" }} />
      </label>
    </div>,
    "A+",
    <div>
      <Button className="accept">
        <CheckBoxRoundedIcon style={{ fill: "#08E72B" }} />
      </Button>
      <Button className="reject">
        <CancelPresentationFilledIcon style={{ fill: "#B11005" }} />
      </Button>
    </div>
  ),
  createData(
    "Fortis",
    25,
    <div>
      <label htmlFor="contained-button-file5">
        <Input id="contained-button-file5" multiple type="file" />
        <FileUploadOutlinedIcon style={{ color: "black", cursor: "pointer" }} />
      </label>
    </div>,
    "O+",
    <div>
      <Button className="accept">
        <CheckBoxRoundedIcon style={{ fill: "#08E72B" }} />
      </Button>
      <Button className="reject">
        <CancelPresentationFilledIcon style={{ fill: "#B11005" }} />
      </Button>
    </div>
  ),
];

export default function BasicTable() {
  const [patients, setPatients] = useState([]); // Initialized with an empty array
  const [accepted, setAccepted] = useState(false)

  /**
   * Used to apply any side effects like API calls.
   */

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await getUser();
        const email = user.email;
        const response = await POST_UN_AUTH('/request_organ/available',{email});
        console.log(response);
        setPatients(response);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

  const rejectPatient = async (id, i) => {
      var myobj2 = document.getElementById("row-"+i);
      myobj2.remove();
  };

  const acceptPatient = async(id) =>{
    const user = await getUser();
    const email = user.email;
    const response = await POST_UN_AUTH('/accept/'+id,{email});
    console.log(response);
    if(response._id){
      setAccepted(true)
    }
  }


  return (
    <div className="bg-grey full-height">
      <Header />
      <div className="acpt">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 500 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Hospital Name</StyledTableCell>
                <StyledTableCell align="center">Donor Age</StyledTableCell>
                <StyledTableCell align="center">Blood Group</StyledTableCell>
                <StyledTableCell align="center">Accept/Reject</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody class="bg">
              {patients.map((patient, i) => (
                <StyledTableRow id={"row-"+i} key={patient._id}>
                    <StyledTableCell component="th" scope="row">
                      {patient.hos_id.name}, {patient.hos_id.street}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {patient.patient_age}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {patient.blood_group}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                    {accepted 
                    ? <div>accepted</div>
                    :
                      <div>
                        <Button className="accept" onClick={() => acceptPatient(patient._id)}>
                          <CheckBoxRoundedIcon style={{ fill: "#08E72B" }} />
                        </Button>
                        <Button className="reject" onClick={() => rejectPatient(patient._id, i)}>
                          <CancelPresentationFilledIcon
                            style={{ fill: "#B11005" }}
                          />
                        </Button>
                      </div>}
                    </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
