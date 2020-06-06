import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import HomePage from './components/HomePage';
import ManageBurger from './components/ManageBurger';

function App() {
  return (
    <>
      <div>
        <p>Restaurant Management App!</p>
      </div>

      <nav>
        <ul>
          <li>
            <Link to={"/"}> Home </Link>
          </li>
          <li>
            <Link to={"/manageBurger"}> Manage Burger Of The Day </Link>
          </li>
          
        </ul>
      </nav>
      <Switch>
        <Route path={"/"} exact component={HomePage} />
        <Route path={"/manageBurger"} exact component={ManageBurger} />
      </Switch>
    </>
  );
}

export default App;
