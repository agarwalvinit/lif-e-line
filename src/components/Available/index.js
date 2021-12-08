import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import "./index.scss";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import CancelPresentationFilledIcon from "@mui/icons-material/CancelPresentationTwoTone";
import Button from "@mui/material/Button";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import Header from "../Header";
import { fetchHospitals } from "../../services/index";
import { getUser } from "../../utils/auth";
import { GET_UN_AUTH, POST_UN_AUTH } from "../../utils/http";

// const Input = styled("input")({
//   display: "none",
// });

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

// function createData(name, age, prescription, bloodgroup) {
//   return { name, age, prescription, bloodgroup };
// }

// const rows = [
//   createData(
//     "Fortis",
//     56,
//     <div>
//       <label htmlFor="contained-button-file1">
//         <Input id="contained-button-file1" multiple type="file" />
//         <FileUploadOutlinedIcon style={{ color: "black", cursor: "pointer" }} />
//       </label>
//     </div>,
//     "B+"
//   ),
//   createData(
//     "Fortis",
//     65,
//     <div>
//       <label htmlFor="contained-button-file2">
//         <Input id="contained-button-file2" multiple type="file" />
//         <FileUploadOutlinedIcon style={{ color: "black", cursor: "pointer" }} />
//       </label>
//     </div>,
//     "O-"
//   ),
//   createData(
//     "Fortis",
//     80,
//     <div>
//       <label htmlFor="contained-button-file3">
//         <Input id="contained-button-file3" multiple type="file" />
//         <FileUploadOutlinedIcon style={{ color: "black", cursor: "pointer" }} />
//       </label>
//     </div>,
//     "AB+"
//   ),
//   createData(
//     "Fortis",
//     28,
//     <div>
//       <label htmlFor="contained-button-file4">
//         <Input id="contained-button-file4" multiple type="file" />
//         <FileUploadOutlinedIcon style={{ color: "black", cursor: "pointer" }} />
//       </label>
//     </div>,
//     "A+"
//   ),
//   createData(
//     "Fortis",
//     25,
//     <div>
//       <label htmlFor="contained-button-file5">
//         <Input id="contained-button-file5" multiple type="file" />
//         <FileUploadOutlinedIcon style={{ color: "black", cursor: "pointer" }} />
//       </label>
//     </div>,
//     "O+"
//   ),
// ];

export default function BasicTable() {
  const [organs, setOrgans] = useState([]); // Initialized with an empty array
  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await getUser();
        const email = user.email;
        console.log(email);
        const response = await POST_UN_AUTH('/organ/all',{email});
        console.log(response);
        setOrgans(response);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-grey full-height">
      <Header />
      <div className="acpt">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 500 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Organ Name</StyledTableCell>
                <StyledTableCell align="center">Donor Age</StyledTableCell>
                <StyledTableCell align="center">Blood Group</StyledTableCell>
                <StyledTableCell align="center">Status</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody class="bg">
              {organs.map((organ) => (
                <StyledTableRow key={organ._id}>
                  <StyledTableCell component="th" scope="row">
                    {organ.organ}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {organ.donor_age}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {organ.blood_group}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {organ.status}
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
