import React, { useEffect, useState } from "react";
// import EmployeeSchedule from "./EmployeeSchedule";
// import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {
  withStyles,
  Typography,
  TextField,
  Button,
  CardContent,
  Menu,
  MenuItem,
  Container,
  CssBaseline,
  AppBar,
  Toolbar,
} from "@material-ui/core";
import Card from "@material-ui/core/Card";

import axios from "axios";

import BurgerOfDay from "./BurgerOfDay";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  marginRight: {
    marginRight: 10,
  },
});

const HomePage = () => {
  const classes = useStyles();

  const [scheduleData, setScheduleData] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getScheduleData();
    getUserData();
  }, []);

  const getScheduleData = async () => {
    let scheduleData = await axios.get(`http://localhost:3001/schedule`);
    console.log("schedule data: ", scheduleData.data);
    setScheduleData(scheduleData.data);
  };

  const getUserData = async () => {
    let userData = await axios.get(`http://localhost:3001/users`);
    console.log("User data: ", userData.data);
    setUserData(userData.data);
  };

  return (
    <>
      <div>
        Welcome to the Dashboard!
        <BurgerOfDay />
      </div>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Monday</TableCell>
              <TableCell align="center">Tuesday</TableCell>
              <TableCell align="center">Wednesday</TableCell>
              <TableCell align="center">Thursday</TableCell>
              <TableCell align="center">Friday</TableCell>
              <TableCell align="center">Saturday</TableCell>
              <TableCell align="center">Sunday</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          
            {scheduleData.map((eachSchedule) =>
              userData.map((eachUser) => (
                // return (
                //   <div>
                //     <EmployeeSchedule eachUser={eachUser} />
                //   </div>
                // );
                <> 
                <TableRow>         
                  
                    <TableCell align="center">
                      {eachUser.id === eachSchedule.userId &&
                      eachSchedule.workDays.includes("monday") ? (
                        <div>{eachUser.name}</div>
                      ) : null}
                    </TableCell>

                    <TableCell align="center">
                      {eachUser.id === eachSchedule.userId &&
                      eachSchedule.workDays.includes("tuesday") ? (
                        <div>{eachUser.name}</div>
                      ) : null}
                    </TableCell>

                    <TableCell align="center">
                      {eachUser.id === eachSchedule.userId &&
                      eachSchedule.workDays.includes("wednesday") ? (
                        <div>{eachUser.name}</div>
                      ) : null}
                    </TableCell>

                    <TableCell align="center">
                      {eachUser.id === eachSchedule.userId &&
                      eachSchedule.workDays.includes("thursday") ? (
                        <div>{eachUser.name}</div>
                      ) : null}
                    </TableCell>

                    <TableCell align="center">
                      {eachUser.id === eachSchedule.userId &&
                      eachSchedule.workDays.includes("friday") ? (
                        <div>{eachUser.name}</div>
                      ) : null}
                    </TableCell>

                    <TableCell align="center">
                      {eachUser.id === eachSchedule.userId &&
                      eachSchedule.workDays.includes("saturday") ? (
                        <div>{eachUser.name}</div>
                      ) : null}
                    </TableCell>

                    <TableCell align="center">
                      {eachUser.id === eachSchedule.userId &&
                      eachSchedule.workDays.includes("sunday") ? (
                        <div>{eachUser.name}</div>
                      ) : null}
                    </TableCell>

                    </TableRow>
                    </>               
              ))
            )}
            
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default HomePage;

//               userData.map((eachUser) => (
//                   <>
//                   Monday: {eachUser.id === eachSchedule.userId &&
//                     eachSchedule.workDays.includes("monday") ? (
//                         <div>{eachUser.name}</div>
//                     ) : (
//                       <div></div>
//                     )}

// <div> Tuesday: {eachUser.id === eachSchedule.userId &&
//                     eachSchedule.workDays.includes("tuesday") ? (
//                       eachUser.name
//                     ) : (
//                       <div></div>
//                     )}</div>
//                   </>
//                 // <TableRow key={eachUser.id}>
//                 //   <TableCell component="th" scope="row">
//                 //     {eachUser.id === eachSchedule.userId &&
//                 //     eachSchedule.workDays.includes("monday") ? (
//                 //       eachUser.name
//                 //     ) : (
//                 //       <div></div>
//                 //     )}
//                 //   </TableCell>
//                 //   <TableCell align="right">{eachUser.email}</TableCell>
//                 //   <TableCell align="right">{eachUser.phone}</TableCell>
//                 //   <TableCell align="right">{eachUser.address}</TableCell>
//                 //   <TableCell align="right">{eachUser.description}</TableCell>
//                 //   <TableCell align="right">
//                 //     {/* <Link to={`edit/${eachSchedule.id}`}> <EditIcon className={classes.marginRight} /> </Link>
//                 //                    <DeleteIcon onClick={e => deleteCustomer(e, customer.id)} />  */}
//                 //   </TableCell>
//                 // </TableRow>
//               ))

// }
//   </TableBody>
