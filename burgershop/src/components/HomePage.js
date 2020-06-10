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
import GetBurgerSchedule from './GetBurgerSchedule';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  marginRight: {
    marginRight: 10,
  },
  names: {
    color: "white",
    padding: 10,
    margin: 10,
    fontSize: 20,
    border: '1px solid blue',
    borderRadius: '50%',
    backgroundColor: '#008BC9'
  },
  days: {
    color: "#008BC9",
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
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
    // console.log("schedule data: ", scheduleData.data);
    setScheduleData(scheduleData.data);
  };

  const getUserData = async () => {
    let userData = await axios.get(`http://localhost:3001/users`);
    // console.log("User data: ", userData.data);
    setUserData(userData.data);
  };
  let monday = [];
  let tuesday = [];
  let wednesday = [];
  let thursday = [];
  let friday = [];
  let saturday = [];
  let sunday = [];

  scheduleData.map((eachSchedule) => {
    userData.map((eachUser) => {
      if (
        eachUser.id === eachSchedule.userId &&
        eachSchedule.workDays.includes("monday")
      ) {
        monday.push(eachUser.name);
      }

      if (
        eachUser.id === eachSchedule.userId &&
        eachSchedule.workDays.includes("tuesday")
      ) {
        tuesday.push(eachUser.name);
      }

      if (
        eachUser.id === eachSchedule.userId &&
        eachSchedule.workDays.includes("wednesday")
      ) {
        wednesday.push(eachUser.name);
      }

      if (
        eachUser.id === eachSchedule.userId &&
        eachSchedule.workDays.includes("thursday")
      ) {
        thursday.push(eachUser.name);
      }

      if (
        eachUser.id === eachSchedule.userId &&
        eachSchedule.workDays.includes("friday")
      ) {
        friday.push(eachUser.name);
      }

      if (
        eachUser.id === eachSchedule.userId &&
        eachSchedule.workDays.includes("saturday")
      ) {
        saturday.push(eachUser.name);
      }

      if (
        eachUser.id === eachSchedule.userId &&
        eachSchedule.workDays.includes("sunday")
      ) {
        sunday.push(eachUser.name);
      }
    });
  });

  return (
    <>
      <div>
        Welcome to the Dashboard!
        {/* <BurgerOfDay /> */}
      </div>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" className={classes.days}>
                Monday
              </TableCell>
              <TableCell align="center" className={classes.days}>
                Tuesday
              </TableCell>
              <TableCell align="center" className={classes.days}>
                Wednesday
              </TableCell>
              <TableCell align="center" className={classes.days}>
                Thursday
              </TableCell>
              <TableCell align="center" className={classes.days}>
                Friday
              </TableCell>
              <TableCell align="center" className={classes.days}>
                Saturday
              </TableCell>
              <TableCell align="center" className={classes.days}>
                Sunday
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">
                {monday.map((eachMonName) => (
                  <Typography key={Math.random() * 100000} className={classes.names}>
                    {eachMonName}
                  </Typography>
                ))}
              </TableCell>

              <TableCell align="center">
                {tuesday.map((eachTuesName) => (
                  <Typography key={Math.random() * 100000} className={classes.names}>
                    {eachTuesName}
                  </Typography>
                ))}
              </TableCell>

              <TableCell align="center">
                {wednesday.map((eachWedName) => (
                  <Typography key={Math.random() * 100000} className={classes.names}>
                    {eachWedName}
                  </Typography>
                ))}
              </TableCell>

              <TableCell align="center">
                {thursday.map((eachThursName) => (
                  <Typography key={Math.random() * 100000} className={classes.names}>
                    {eachThursName}
                  </Typography>
                ))}
              </TableCell>

              <TableCell align="center">
                {friday.map((eachFriName) => (
                  <Typography key={Math.random() * 100000} className={classes.names}>
                    {eachFriName}
                  </Typography>
                ))}
              </TableCell>

              <TableCell align="center">
                {saturday.map((eachSatName) => (
                  <Typography key={Math.random() * 100000} className={classes.names}>
                    {eachSatName}
                  </Typography>
                ))}
              </TableCell>

              <TableCell align="center">
                {sunday.map((eachSunName) => (
                  <Typography key={Math.random() * 100000} className={classes.names}>
                    {eachSunName}
                  </Typography>
                ))}
              </TableCell>
            </TableRow>

            {/* {scheduleData.map((eachSchedule) =>
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
            )} */}
          </TableBody>
        </Table>
      </TableContainer>

      <GetBurgerSchedule />
    </>
  );
};

export default HomePage;
