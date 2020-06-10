import React, { useEffect, useState } from "react";
import { Route, Link, Switch, withRouter } from "react-router-dom";
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
  Card,
  Menu,
  MenuItem,
  Container,
  CssBaseline,
  CardActionArea,
  Toolbar,
} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';

import axios from "axios";

import EmployeeSchedule from "./EmployeeSchedule";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  marginRight: {
    marginRight: 10,
  },
});

const Employees = () => {
  const classes = useStyles();

  const [userData, setUserData] = useState([]);
  const [eachUserSched, setEachUserSched] = useState([]);

  useEffect(() => {
    getUserData();
    // getEachUserSched();
  }, []);

  let getUserData = async () => {
    let userData = await axios.get(`http://localhost:3001/users`);
    console.log("User data: ", userData.data);
    await setUserData(userData.data);
  };

  // let getEachUserSched = async () => {
  //   let userSched = await axios.get(
  //     `http://localhost:3001/users/${props.eachUser.id}/schedule`
  //   );

  //   console.log("user sched data: ", userSched.data);
  //   setEachUserSched(userSched.data);
  // };

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

      {userData.map((eachUser) => (
        <div key={eachUser.id}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {eachUser.name}
                  {/* <Link to={`/manageEmpSched/${eachUser.id}`}>
                  <EditIcon className={classes.marginRight} />
                </Link> */}
                </Typography>                
              </CardContent>
              <EmployeeSchedule eachUser={eachUser} />
            </CardActionArea>
          </Card>          
          {/* <Switch>
            <Route
              path={"/manageEmpSched/:schedId"}
              render={(props) => <EmployeeSchedule {...props} eachUser={eachUser} />}
              // component={() => <EmployeeSchedule eachUser={eachUser} />}
            />
          </Switch> */}
        </div>
      ))}
    </>
  );
};

export default Employees;

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
