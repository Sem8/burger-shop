import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  Typography,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

import axios from "axios";

import GetBurgerSchedule from "./GetBurgerSchedule";

import "./styles/HomePage.css";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    marginTop: "20px",
    marginBottom: "20px",
  },
  marginRight: {
    marginRight: 10,
  },
  names: {
    color: "white",
    padding: 10,
    margin: 10,
    fontSize: 20,
    border: "1px solid blue",
    borderRadius: "50px",
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
  },
  days: {
    color: "white",
    background: "linear-gradient(45deg, #008BC9 30%, #21CBF3 90%)",
    border: "2px solid 008BC9",
    margin: 10,
    fontSize: 30,
    fontWeight: "bold",
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
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                className={classes.days}
                data-testid="monday"
              >
                Monday
              </TableCell>
              <TableCell
                align="center"
                className={classes.days}
                data-testid="tuesday"
              >
                Tuesday
              </TableCell>
              <TableCell
                align="center"
                className={classes.days}
                data-testid="wednesday"
              >
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
              <TableCell align="center" data-testid="weekWorkers">
                {monday.map((eachMonName) => (
                  <Typography
                    key={Math.random() * 100000}
                    className={classes.names}
                  >
                    {eachMonName}
                  </Typography>
                ))}
              </TableCell>

              <TableCell align="center">
                {tuesday.map((eachTuesName) => (
                  <Typography
                    key={Math.random() * 100000}
                    className={classes.names}
                  >
                    {eachTuesName}
                  </Typography>
                ))}
              </TableCell>

              <TableCell align="center">
                {wednesday.map((eachWedName) => (
                  <Typography
                    key={Math.random() * 100000}
                    className={classes.names}
                    data-testid="wedWorkers"
                  >
                    {eachWedName}
                  </Typography>
                ))}
              </TableCell>

              <TableCell align="center">
                {thursday.map((eachThursName) => (
                  <Typography
                    key={Math.random() * 100000}
                    className={classes.names}
                    data-testid="thursWorkers"
                  >
                    {eachThursName}
                  </Typography>
                ))}
              </TableCell>

              <TableCell align="center">
                {friday.map((eachFriName) => (
                  <Typography
                    key={Math.random() * 100000}
                    className={classes.names}
                    data-testid="friWorkers"
                  >
                    {eachFriName}
                  </Typography>
                ))}
              </TableCell>

              <TableCell align="center">
                {saturday.map((eachSatName) => (
                  <Typography
                    key={Math.random() * 100000}
                    className={classes.names}
                    data-testid="satWorkers"
                  >
                    {eachSatName}
                  </Typography>
                ))}
              </TableCell>

              <TableCell align="center">
                {sunday.map((eachSunName) => (
                  <Typography
                    key={Math.random() * 100000}
                    className={classes.names}
                    data-testid="sunWorkers"
                  >
                    {eachSunName}
                  </Typography>
                ))}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <GetBurgerSchedule />
    </>
  );
};

export default HomePage;
