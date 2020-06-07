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

import DisplayBurger from "./DisplayBurger";

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

const GetBurgerSchedule = () => {
  const classes = useStyles();

  // let weekSchedule = {
  //   monday: "",
  //   tuesday: "",
  //   wednesday: "",
  //   thursday: "",
  //   friday: "",
  //   saturday: "",
  //   sunday: "",
  // };

  const [burgerData, setBurgerData] = useState([]);
  // const [burgerSchedule, setBurgerSchedule] = useState(weekSchedule);

  useEffect(() => {
    getBurgerData();
    // createBurgerSchedule();
  }, []);

  const getBurgerData = async () => {
    let burgerData = await axios.get(`http://localhost:3001/burgers`);
    console.log("burger data: ", burgerData.data);
    setBurgerData(burgerData.data);
  };

  let burgerDataCopy = [];
  // const createBurgerSchedule = async () => {
  //   let weekScheduleCopy = { ...weekSchedule };

  //   for (let eachDay in weekSchedule) {
  //     if (burgerData.length > 0) {
  //       weekScheduleCopy.eachDay =
  //         await burgerData[Math.floor(Math.random() * burgerData.length)]["name"];
  //     }
  //   }
  //   setBurgerSchedule(weekScheduleCopy);
  // };

  return (
    <>
      <Typography>Burgers of every day</Typography>
      

      {burgerData.map((eachBurger) => {
        burgerDataCopy.push(eachBurger);
      })}
      <DisplayBurger burgerDataCopy={burgerDataCopy} />
    </>
  );
};

export default GetBurgerSchedule;
