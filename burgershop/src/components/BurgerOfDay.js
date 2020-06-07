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

const BurgerOfDay = (props) => {

    // console.log('props.weekSchedule', props.weekSchedule)
    // let todaysDate = new Date();
    // let allDays = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
    // let todaysDay = allDays[todaysDate.getDay()];
    // // console.log('todaysDay: ', todaysDay);
    // // let burgerOfDay = props.weekSchedule.todaysDay
    // console.log('props.weekSchedule.todaysDay: ', props.weekSchedule[`${todaysDay}`])

    return (
        <>
        <Typography>
            Today's Burger Of The Day!
        </Typography>
    <Typography>{props.burgerOfDay}</Typography>
            
        </>
    )
}

export default BurgerOfDay
