import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import "./index.scss";
import Button from "@mui/material/Button";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import Header from "../Header";
import { Link } from "gatsby";
import { fetchHospitals } from "../../services/index";

const Input = styled("input")({
  display: "none",
});

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

const BasicTable = () => {
  const [hospitals, setHospitals] = useState([]); // Initialized with an empty array

  /**
   * Used to apply any side effects like API calls.
   */

  useEffect(() => {
    const fetchData = async () => {
      try {
        const hospitalList = await fetchHospitals();
        console.log("Hospital List:", hospitalList);
        setHospitals(hospitalList);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

  const deleteHospital = (id) => console.log(id);

  return (
    <div className="bg-grey full-height">
      <Header />
      <div className="made">
        <h3> Donations Made: </h3>
      </div>
      <div className="acpt">
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 500 }}
            className="table-alignment"
            aria-label="customized table"
          >
            <TableBody class="bg">
              {hospitals.map((hospital) => (
                <StyledTableRow key={hospital._id}>
                  <StyledTableCell component="th" scope="row">
                    {`${hospital.name} | ${hospital.state}`}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Button
                      className="delete"
                      onClick={() => deleteHospital(hospital._id)}
                    >
                      <DeleteOutlinedIcon style={{ fill: "#F43365" }} />
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div>
        <Link to="/app/donate-an-organ">
          <input type="submit5" value="Donate new organ " class="btn1" />
        </Link>
      </div>
    </div>
  );
};

export default BasicTable;
