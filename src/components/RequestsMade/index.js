import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import "./index.scss";
import Button from "@mui/material/Button";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import Header from "../Header";
import Typography from "@mui/material/Typography";
import { Link } from "gatsby";

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
function createData(orgname, deletededit) {
  return { orgname, deletededit };
}

const rows = [
  createData(
    "Fortis",
    <div>
      <Button className="delete">
        <DeleteOutlinedIcon style={{ fill: "#F43365" }} />
      </Button>
      <Button className="edit">
        <ModeEditOutlinedIcon style={{ fill: "#F43365" }} />
      </Button>
    </div>
  ),
  createData(
    "Fortis",
    <div>
      <Button className="delete">
        <DeleteOutlinedIcon style={{ fill: "#F43365" }} />
      </Button>
      <Button className="edit">
        <ModeEditOutlinedIcon style={{ fill: "#F43365" }} />
      </Button>
    </div>
  ),
  createData(
    "Fortis",
    <div>
      <Button className="delete">
        <DeleteOutlinedIcon style={{ fill: "#F43365" }} />
      </Button>
      <Button className="edit">
        <ModeEditOutlinedIcon style={{ fill: "#F43365" }} />
      </Button>
    </div>
  ),
  createData(
    "Fortis",
    <div>
      <Button className="delete">
        <DeleteOutlinedIcon style={{ fill: "#F43365" }} />
      </Button>
      <Button className="edit">
        <ModeEditOutlinedIcon style={{ fill: "#F43365" }} />
      </Button>
    </div>
  ),
  createData(
    "Fortis",
    <div>
      <Button className="delete">
        <DeleteOutlinedIcon style={{ fill: "#F43365" }} />
      </Button>
      <Button className="edit">
        <ModeEditOutlinedIcon style={{ fill: "#F43365" }} />
      </Button>
    </div>
  ),
];

export default function BasicTable() {
  return (
    <div className="bg-grey full-height">
      <Header />
      {/* <div className="request-made-main"> */}
      <div className="made">
        <h3> Requests Made: </h3>
      </div>
      <div className="acpt">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 500 }} aria-label="customized table">
            <TableBody class="bg">
              {rows.map((row) => (
                <StyledTableRow key={row.orgname}>
                  <StyledTableCell component="th" scope="row">
                    {row.orgname}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.deletededit}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      {/* </div> */}
      <div>
        <Link to="/app/request-an-organ">
          <input type="submit5" value="Request for organ " class="btn1" />
        </Link>
      </div>
    </div>
  );
}
