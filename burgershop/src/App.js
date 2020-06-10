import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import HomePage from "./components/HomePage";
import GetBurgerSchedule from "./components/GetBurgerSchedule";
import Employees from "./components/Employees";
import UpdateEmployeeSchedule from "./components/UpdateEmployeeSchedule";

function App() {
  return (
    <>
      <div>
        <p>Bob's Restaurant</p>
      </div>

      <nav>
        <ul>
          <li>
            <Link to={"/"}> Home </Link>
          </li>
          <li>
            <Link to={"/manageBurger"}> Manage Burger Of The Day </Link>
          </li>
          <li>
            <Link to={"/manageEmpSched"}> Manage Employee Schedule </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path={"/"} exact component={HomePage} />
        <Route path={"/manageBurger"} exact component={GetBurgerSchedule} />
        <Route path={"/manageEmpSched"} exact component={Employees} />
        <Route path={"/manageEmpSched/:schedId"} component={UpdateEmployeeSchedule} />
      </Switch>
    </>
  );
}

export default App;
