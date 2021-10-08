import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./available.css";
// import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded';
import CancelPresentationFilledIcon from '@mui/icons-material/CancelPresentationTwoTone';
import Button from "@mui/material/Button";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />


function createData(name, age, prescription, bloodgroup, acceptreject) {
  return { name, age, prescription, bloodgroup, acceptreject };
}

const rows = [
  createData(
    'Fortis', 
    56,
    <div><Button className="upload"><FileUploadOutlinedIcon style={{ color : "black"}}/></Button></div>,
    'B+',
    <div>
      <Button className="accept"><CheckBoxRoundedIcon style={{ color : "#08E72B"}}/></Button>
      <Button className="reject"><CancelPresentationFilledIcon style={{fill:"#B11005"}}/></Button>
    </div>
    )
    ,
  createData(
    'Fortis', 
    65,
    <div><Button className="upload"><FileUploadOutlinedIcon style={{ color : "black"}}/></Button></div>,
    'O-',
    <div>
      <Button className="accept"><CheckBoxRoundedIcon style={{ color : "#08E72B"}}/></Button>
      <Button className="reject"><CancelPresentationFilledIcon style={{fill:"#B11005"}}/></Button>
    </div>
    )
    ,
  createData(
    'Fortis', 
    80,
    <div><Button className="upload"><FileUploadOutlinedIcon style={{ color : "black"}}/></Button></div>,
    'AB+',
    <div>
      <Button className="accept"><CheckBoxRoundedIcon style={{ color : "#08E72B"}}/></Button>
      <Button className="reject"><CancelPresentationFilledIcon style={{fill:"#B11005"}}/></Button>
    </div>
    )
    ,
  createData(
    'Fortis', 
    28,
    <div><Button className="upload"><FileUploadOutlinedIcon style={{ color : "black"}}/></Button></div>,
    'A+',
    <div>
      <Button className="accept"><CheckBoxRoundedIcon style={{ color : "#08E72B"}}/></Button>
      <Button className="reject"><CancelPresentationFilledIcon style={{fill:"#B11005"}}/></Button>
    </div>
    )
    ,
  createData(
    'Fortis', 
    25,
    <div><Button className="upload"><FileUploadOutlinedIcon style={{ color : "black"}}/></Button></div>,
    'O+',
    <div>
      <Button className="accept"><CheckBoxRoundedIcon style={{ color : "#08E72B"}}/></Button>
      <Button className="reject"><CancelPresentationFilledIcon style={{fill:"#B11005"}}/></Button>
    </div>
    )
    
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Hospital Name</TableCell>
            <TableCell align="center">Donor Age</TableCell>
            <TableCell align="center">Prescription</TableCell>
            <TableCell align="center">Blood Group</TableCell>
            <TableCell align="center">Accept/Reject</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.age}</TableCell>
              <TableCell align="center">{row.prescription}</TableCell>
              <TableCell align="center">{row.bloodgroup}</TableCell>
              <TableCell align="center">{row.acceptreject}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
