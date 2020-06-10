import React from "react";
import { Route, Link, Switch} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import HomePage from "./components/HomePage";
// import GetBurgerSchedule from "./components/GetBurgerSchedule";
import Employees from "./components/Employees";
import UpdateEmployeeSchedule from "./components/UpdateEmployeeSchedule";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
  },
  title: {},
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
      <Typography variant="h6" className={classes.title} data-testid='title'>
        Bob's Restaurant
      </Typography>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              <Link to={"/"} className={classes.links} data-testid='home-link'>
                {" "}
                Home{" "}
              </Link>
            </Typography>
            <Typography variant="h6">
              <Link to={"/manageEmpSched"} className={classes.links} data-testid='schedule-link'>
                {" "}
                Manage Employee Schedule{" "}
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>

      <Switch>
        <Route path={"/"} exact component={HomePage} />
        {/* <Route path={"/manageBurger"} exact component={GetBurgerSchedule} /> */}
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
