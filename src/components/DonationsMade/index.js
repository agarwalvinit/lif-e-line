import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import "./index.scss";
import axios from "axios";
import Button from "@mui/material/Button";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import Header from "../Header";
import { Link } from "gatsby";
import { getUser } from "../../utils/auth";
import { POST_UN_AUTH } from "../../utils/http";
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
  const [organs, setOrgans] = useState([]); // Initialized with an empty array

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await getUser();
        const email = user.email;
        const response = await POST_UN_AUTH('/organ/me',{email});
        console.log(response);
        setOrgans(response);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

  const deleteHospital = async (id, index) => {
    const response = await axios.delete(`https://life-line-app-backend.herokuapp.com/organ/${id}`);
    console.log(response)
    if(response.status==200){
        var myobj = document.getElementById("row-"+index);
        myobj.remove();
    }
  };

  console.log(organs)

  return (
    <div className="bg-grey full-height">
      <Header />
      <div className="made">
        <h3> Donations Made: </h3>
      </div>
      <div className="acpt" style={{"top":"5%"}}>
        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableBody class="bg">
              {organs.map((organ, i) => (
                <StyledTableRow id={"row-"+i} key={organ._id}>
                  <StyledTableCell component="th" scope="row">
                    {`${organ.organ} | ${organ.donor_name}, ${organ.donor_age} | ${organ.blood_group}`}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Button
                      className="delete"
                      onClick={() => deleteHospital(organ._id, i)}
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
