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
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
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
  const [burgerSchedule, setBurgerSchedule] = useState(weekSchedule);
  // const [burgerOfDay, setBurgerOfDay] = useState('');

  let generateBurger = () => {
    if (props.burgerDataCopy.length) {
      setBurgerSchedule((burgerSchedule) => ({
        ...burgerSchedule,
        monday:
          props.burgerDataCopy[
            Math.floor(Math.random() * props.burgerDataCopy.length)
          ]["name"],
        tuesday:
          props.burgerDataCopy[
            Math.floor(Math.random() * props.burgerDataCopy.length)
          ]["name"],
        wednesday:
          props.burgerDataCopy[
            Math.floor(Math.random() * props.burgerDataCopy.length)
          ]["name"],
        thursday:
          props.burgerDataCopy[
            Math.floor(Math.random() * props.burgerDataCopy.length)
          ]["name"],
        friday:
          props.burgerDataCopy[
            Math.floor(Math.random() * props.burgerDataCopy.length)
          ]["name"],
        saturday:
          props.burgerDataCopy[
            Math.floor(Math.random() * props.burgerDataCopy.length)
          ]["name"],
        sunday:
          props.burgerDataCopy[
            Math.floor(Math.random() * props.burgerDataCopy.length)
          ]["name"],
      }));

      // weekSchedule = {
      //   ...weekSchedule,
      //   monday:
      //     props.burgerDataCopy[
      //       Math.floor(Math.random() * props.burgerDataCopy.length)
      //     ]["name"],
      // };

      // weekSchedule = {
      //   ...weekSchedule,
      //   tuesday:
      //     props.burgerDataCopy[
      //       Math.floor(Math.random() * props.burgerDataCopy.length)
      //     ]["name"],
      // };
      // weekSchedule = {
      //   ...weekSchedule,
      //   wednesday:
      //     props.burgerDataCopy[
      //       Math.floor(Math.random() * props.burgerDataCopy.length)
      //     ]["name"],
      // };
      // weekSchedule = {
      //   ...weekSchedule,
      //   thursday:
      //     props.burgerDataCopy[
      //       Math.floor(Math.random() * props.burgerDataCopy.length)
      //     ]["name"],
      // };

      // weekSchedule = {
      //   ...weekSchedule,
      //   friday:
      //     props.burgerDataCopy[
      //       Math.floor(Math.random() * props.burgerDataCopy.length)
      //     ]["name"],
      // };
      // weekSchedule = {
      //   ...weekSchedule,
      //   saturday:
      //     props.burgerDataCopy[
      //       Math.floor(Math.random() * props.burgerDataCopy.length)
      //     ]["name"],
      // };
      // weekSchedule = {
      //   ...weekSchedule,
      //   sunday:
      //     props.burgerDataCopy[
      //       Math.floor(Math.random() * props.burgerDataCopy.length)
      //     ]["name"],
      // };
    }
  };

  let todaysDate = new Date();
  let allDays = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  let todaysDay = allDays[todaysDate.getDay()];
  let burgerOfDay = burgerSchedule[`${todaysDay}`];

  const handleChange = (event) => {
    event.persist();
    setBurgerSchedule((burgerSchedule) => ({
      ...burgerSchedule,
      [event.target.name]: event.target.value,
    }));
  };

  const deleteBurger = (event) => {
    event.persist();
    setBurgerSchedule(weekSchedule);
  };

  const handleBurgerSubmit = (event) => {
    event.persist();
    setBurgerSchedule(burgerSchedule);
  };

  return (
    <>
      <BurgerOfDay burgerOfDay={burgerOfDay} />
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<AddIcon />}
        onClick={generateBurger}
      >
        Get Burgers for this week
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<DeleteIcon />}
        onClick={(e) => deleteBurger(e, "monday")}
      >
        Clear Burgers
      </Button>
      <Typography
        variant="body2"
        gutterBottom
        style={{ padding: "3px", fontSize: "32px" }}
      >
        Burgers this week!
      </Typography>
      <Typography
        variant="body2"
        gutterBottom
        style={{ padding: "3px", fontSize: "16px" }}
      >
        *Note: Burger names below can be edited directly in the fields below
      </Typography>
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
                <TextField
                  id="outlined-input"
                  name="monday"
                  value={burgerSchedule.monday}
                  type="text"
                  variant="outlined"
                  style={{ width: "250px" }}
                  margin="normal"
                  multiline={true}
                  rows={4}
                  rowsMax={4}
                  onChange={handleChange}
                />{" "}
              </TableCell>

              <TableCell align="center">
                <TextField
                  id="outlined-input"
                  name="tuesday"
                  value={burgerSchedule.tuesday}
                  type="text"
                  variant="outlined"
                  style={{ width: "250px" }}
                  margin="normal"
                  multiline={true}
                  rows={4}
                  rowsMax={4}
                  onChange={handleChange}
                />{" "}
              </TableCell>

              <TableCell align="center">
                <TextField
                  id="outlined-input"
                  name="wednesday"
                  value={burgerSchedule.wednesday}
                  type="text"
                  variant="outlined"
                  style={{ width: "250px" }}
                  margin="normal"
                  multiline={true}
                  rows={4}
                  rowsMax={4}
                  onChange={handleChange}
                />{" "}
              </TableCell>

              <TableCell align="center">
                <TextField
                  id="outlined-input"
                  name="thursday"
                  value={burgerSchedule.thursday}
                  type="text"
                  variant="outlined"
                  style={{ width: "250px" }}
                  margin="normal"
                  multiline={true}
                  rows={4}
                  rowsMax={4}
                  onChange={handleChange}
                />{" "}
              </TableCell>

              <TableCell align="center">
                <TextField
                  id="outlined-input"
                  name="friday"
                  value={burgerSchedule.friday}
                  type="text"
                  variant="outlined"
                  style={{ width: "250px" }}
                  margin="normal"
                  multiline={true}
                  rows={4}
                  rowsMax={4}
                  onChange={handleChange}
                />{" "}
              </TableCell>

              <TableCell align="center">
                <TextField
                  id="outlined-input"
                  name="saturday"
                  value={burgerSchedule.saturday}
                  type="text"
                  variant="outlined"
                  style={{ width: "250px" }}
                  margin="normal"
                  multiline={true}
                  rows={4}
                  rowsMax={4}
                  onChange={handleChange}
                />{" "}
              </TableCell>

              <TableCell align="center">
                <TextField
                  id="outlined-input"
                  name="sunday"
                  value={burgerSchedule.sunday}
                  type="text"
                  variant="outlined"
                  style={{ width: "250px" }}
                  margin="normal"
                  multiline={true}
                  rows={4}
                  rowsMax={4}
                  onChange={handleChange}
                />{" "}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DisplayBurger;
