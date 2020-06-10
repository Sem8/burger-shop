import React, { useEffect, useState } from "react";
import {
  RouteComponentProps,
  withRouter,
  useHistory,
  useParams,
  Link,
  Route,
  Switch,
} from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
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
import SaveIcon from "@material-ui/icons/Save";
import EditIcon from "@material-ui/icons/Edit";

import axios from "axios";

import UpdateEmployeeSchedule from "./UpdateEmployeeSchedule";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: 200,
        display: "block",
      },
    },
    wrapper: {
      width: "100%",
    },
    formInput: {
      width: "100%",
    },
    button: {
      margin: theme.spacing(1),
    },
  })
);

const EmployeeSchedule = (props) => {
  const { schedId } = useParams();

  const classes = useStyles();
  const history = useHistory();

  const [eachUserSched, setEachUserSched] = useState([]);

  useEffect(() => {
    getEachUserSched();
  }, []);

  let getEachUserSched = async () => {
    let userSched = await axios.get(
      `http://localhost:3001/users/${props.eachUser.id}/schedule`
    );
    // console.log("user sched data userSched.data: ", userSched.data);
    setEachUserSched(userSched.data);
  };
  //   console.log("each user sched eachUserSched: ", eachUserSched);

  return (
    <>
      {eachUserSched.map((singleSchedule) => (
        <div key={singleSchedule.id}>
          <Link to={`/manageEmpSched/${singleSchedule.id}`}>
            <EditIcon className={classes.marginRight} />
          </Link>
          {singleSchedule.workDays.map((eachWorkDay) => (
            <div key={Math.random() * 10000}>
              <Typography>{eachWorkDay}</Typography>
            </div>
          ))}
          {/* <Switch>
            <Route
              path={"/manageEmpSched/:schedId"}
              render={(props) => (
                <UpdateEmployeeSchedule
                  {...props}
                  singleSchedule={singleSchedule}
                />
              )}
              // component={() => <EmployeeSchedule eachUser={eachUser} />}
            />
          </Switch> */}
        </div>
      ))}
    </>
  );
};

export default EmployeeSchedule;
