import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  CardContent,
  Card,
  CardActionArea,
} from "@material-ui/core";

import axios from "axios";

import EmployeeSchedule from "./EmployeeSchedule";

const useStyles = makeStyles({
  employeeName: {
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
    color: "white",
    border: 2,
    borderRadius: 10,
    textAlign: "center",
    width: "350px",
    margin: "10px auto",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Employees = () => {
  const classes = useStyles();

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getUserData();
  }, []);

  let getUserData = async () => {
    let userData = await axios.get(`http://localhost:3001/users`);
    console.log("User data: ", userData.data);
    await setUserData(userData.data);
  };

  return (
    <>
      {userData.map((eachUser) => (
        <div key={eachUser.id}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardContent className={classes.employeeName}>
                <Typography gutterBottom variant="h5" component="h2">
                  {eachUser.name}
                </Typography>
              </CardContent>
              <EmployeeSchedule eachUser={eachUser} />
            </CardActionArea>
          </Card>
        </div>
      ))}
    </>
  );
};

export default Employees;
