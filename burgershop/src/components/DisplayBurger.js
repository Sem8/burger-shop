import React, { useEffect, useState } from "react";
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
import axios from "axios";

import BurgerOfDay from "./BurgerOfDay";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  marginRight: {
    marginRight: 10,
  },
  days: {
    color: "#008BC9",
    padding: 10,
    fontSize: 30,
    fontWeight: "bold",
  },
});

const DisplayBurger = (props) => {
  const classes = useStyles();

  let weekSchedule = {
    monday: "",
    tuesday: "",
    wednesday: "",
    thursday: "",
    friday: "",
    saturday: "",
    sunday: "",
  };
  const [burgerSchedule, setBurgerSchedule] = useState({});
  // const [burgerOfDay, setBurgerOfDay] = useState('');

  if (props.burgerDataCopy.length) {
    // setBurgerSchedule({
    //   monday:
    //     props.burgerDataCopy[
    //       Math.floor(Math.random() * props.burgerDataCopy.length)
    //     ]["name"],
    //   tuesday:
    //     props.burgerDataCopy[
    //       Math.floor(Math.random() * props.burgerDataCopy.length)
    //     ]["name"],
    //   wednesday:
    //     props.burgerDataCopy[
    //       Math.floor(Math.random() * props.burgerDataCopy.length)
    //     ]["name"],
    //   thursday:
    //     props.burgerDataCopy[
    //       Math.floor(Math.random() * props.burgerDataCopy.length)
    //     ]["name"],
    //   friday:
    //     props.burgerDataCopy[
    //       Math.floor(Math.random() * props.burgerDataCopy.length)
    //     ]["name"],
    //   saturday:
    //     props.burgerDataCopy[
    //       Math.floor(Math.random() * props.burgerDataCopy.length)
    //     ]["name"],
    //   sunday:
    //     props.burgerDataCopy[
    //       Math.floor(Math.random() * props.burgerDataCopy.length)
    //     ]["name"],
    // });

    weekSchedule = {
      ...weekSchedule,
      monday:
        props.burgerDataCopy[
          Math.floor(Math.random() * props.burgerDataCopy.length)
        ]["name"],
    };

    weekSchedule = {
      ...weekSchedule,
      tuesday:
        props.burgerDataCopy[
          Math.floor(Math.random() * props.burgerDataCopy.length)
        ]["name"],
    };
    weekSchedule = {
      ...weekSchedule,
      wednesday:
        props.burgerDataCopy[
          Math.floor(Math.random() * props.burgerDataCopy.length)
        ]["name"],
    };
    weekSchedule = {
      ...weekSchedule,
      thursday:
        props.burgerDataCopy[
          Math.floor(Math.random() * props.burgerDataCopy.length)
        ]["name"],
    };

    weekSchedule = {
      ...weekSchedule,
      friday:
        props.burgerDataCopy[
          Math.floor(Math.random() * props.burgerDataCopy.length)
        ]["name"],
    };
    weekSchedule = {
      ...weekSchedule,
      saturday:
        props.burgerDataCopy[
          Math.floor(Math.random() * props.burgerDataCopy.length)
        ]["name"],
    };
    weekSchedule = {
      ...weekSchedule,
      sunday:
        props.burgerDataCopy[
          Math.floor(Math.random() * props.burgerDataCopy.length)
        ]["name"],
    };    
  }    

  let todaysDate = new Date();
  let allDays = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
  let todaysDay = allDays[todaysDate.getDay()];
  let burgerOfDay = weekSchedule[`${todaysDay}`];

  return (
    <>
    <BurgerOfDay burgerOfDay={burgerOfDay} />
    <Typography>Burgers this week</Typography>
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
                <Typography>{weekSchedule.monday}</Typography>
              </TableCell>

              <TableCell align="center">
                <Typography>{weekSchedule.tuesday}</Typography>
              </TableCell>

              <TableCell align="center">
                <Typography>{weekSchedule.wednesday}</Typography>
              </TableCell>

              <TableCell align="center">
                <Typography>{weekSchedule.thursday}</Typography>
              </TableCell>

              <TableCell align="center">
                <Typography>{weekSchedule.friday}</Typography>
              </TableCell>

              <TableCell align="center">
                <Typography>{weekSchedule.saturday}</Typography>
              </TableCell>

              <TableCell align="center">
                <Typography>{weekSchedule.sunday}</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      
    </>
  );
};

export default DisplayBurger;
