import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import HomePage from "./components/HomePage";
import Employees from "./components/Employees";
import UpdateEmployeeSchedule from "./components/UpdateEmployeeSchedule";

import "./components/styles/App.css";

import burger1 from "./images/burger1.jpg";
import burger2 from "./images/burger2.jpg";
import burger3 from "./images/burger3.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
  },
  title: {
    width: "500px",
    margin: "0 auto",
    padding: "15px",
    borderRadius: 10,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
  },
  links: {
    flexGrow: 2,
    color: "white",
    textDecoration: "none",
    marginRight: theme.spacing(4),

    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    margin: 8,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h2" className={classes.title} data-testid="title">
        Bob's Restaurant
      </Typography>
      <div className="burgers">
        <img
          src={burger1}
          alt="burger"
          style={{ width: "250px", height: "250px", borderRadius: "50%" }}
        />
        <img
          src={burger2}
          alt="burger"
          style={{ width: "250px", height: "250px", borderRadius: "50%" }}
        />
        <img
          src={burger3}
          alt="burger"
          style={{ width: "250px", height: "250px", borderRadius: "50%" }}
        />
      </div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              <Link to={"/"} className={classes.links} data-testid="home-link">
                {" "}
                Home{" "}
              </Link>
            </Typography>
            <Typography variant="h6">
              <Link
                to={"/manageEmpSched"}
                className={classes.links}
                data-testid="schedule-link"
              >
                {" "}
                Manage Employee Schedule{" "}
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>

      <Switch>
        <Route path={"/"} exact component={HomePage} />
        <Route path={"/manageEmpSched"} exact component={Employees} />
        <Route
          path={"/manageEmpSched/:schedId"}
          component={UpdateEmployeeSchedule}
        />
      </Switch>
    </>
  );
}

export default App;
