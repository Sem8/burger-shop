import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  marginRight: {
    marginRight: 10,
  },
});

const EmployeeSchedule = (props) => {
  const classes = useStyles();

  //   const [userData, setUserData] = useState([]);
  const [eachUserSched, setEachUserSched] = useState([]);

  useEffect(() => {
    // getUserData();
    getEachUserSched();
  }, []);

  //   const getUserData = async () => {
  //     let userData = await axios.get(`http://localhost:3001/users`);
  //     console.log("User data: ", userData.data);
  //     setUserData(userData.data);
  //   };

  let getEachUserSched = async () => {
    let userSched = await axios.get(
      `http://localhost:3001/users/${props.eachUser.id}/schedule`
    );

    console.log("user sched data: ", userSched.data);
    setEachUserSched(userSched.data);
  };

  //   console.log('eachUserSched[0]: ', eachUserSched[0].id);

  return (
    <>
      {/* <Card className={classes.card}>
        <CardContent>
          <Typography component="p">Monday</Typography>
        </CardContent>

        <CardContent>
          <Typography component="p">Tuesday</Typography>
        </CardContent>
      </Card> */}
      {props.eachUser.id}
      <Card className={classes.card}>
      <CardContent>
      <Typography component="p">Monday</Typography>
      <Typography component="p">Tuesday</Typography>
      {eachUserSched.map((oneUserSched) => (
        <div>
          {oneUserSched.workDays.includes("monday") ? (
                  
                  
                    
                    <Typography component="p">{props.eachUser.name}</Typography>
                  

                
          ) : null}
        </div>
      ))}
      </CardContent>
      </Card>
    </>
  );
};

export default EmployeeSchedule;

/*             <TableRow key={eachUser.id}>
              <TableCell component="th" scope="row">
                {eachUser.name}  
                {eachUser.id === props.eachSchedule.userId &&
                    props.eachSchedule.workDays.includes("monday")
                      ? eachUser.name
                      : ""}
                  </TableCell>
                  <TableCell align="right">{eachUser.email}</TableCell>
                  <TableCell align="right">{eachUser.phone}</TableCell>
                  <TableCell align="right">{eachUser.address}</TableCell>
                  <TableCell align="right">{eachUser.description}</TableCell>
                  <TableCell align="right">
                    <Link to={`edit/${eachUser.id}`}> <EditIcon className={classes.marginRight} /> </Link>
                                   <DeleteIcon onClick={e => deleteCustomer(e, customer.id)} /> 
                  </TableCell>
                </TableRow> 
                */
