import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

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

  const [burgerData, setBurgerData] = useState([]);

  useEffect(() => {
    getBurgerData();
  }, []);

  const getBurgerData = async () => {
    let burgerData = await axios.get(`http://localhost:3001/burgers`);
    console.log("burger data: ", burgerData.data);
    setBurgerData(burgerData.data);
  };

  let burgerDataCopy = [];

  return (
    <>
      {burgerData.map((eachBurger) => {
        burgerDataCopy.push(eachBurger);
      })}
      <DisplayBurger burgerDataCopy={burgerDataCopy} />
    </>
  );
};

export default GetBurgerSchedule;
