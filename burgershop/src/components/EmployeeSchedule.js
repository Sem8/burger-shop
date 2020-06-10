import React, { useEffect, useState } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import { createStyles, makeStyles } from "@material-ui/core/styles";

import { Typography } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

import axios from "axios";

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
    link: {
      display: "flex",
      justifyContent: "center",
    },
    scheduleDays: {
      background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
      boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
      color: "white",
      border: 2,
      borderRadius: 100,
      textAlign: "center",
      width: "200px",
      padding: "5px",
      margin: "5px auto",
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
    setEachUserSched(userSched.data);
  };
  //   console.log("each user sched eachUserSched: ", eachUserSched);

  return (
    <>
      {eachUserSched.map((singleSchedule) => (
        <div key={singleSchedule.id}>
          <Link
            to={`/manageEmpSched/${singleSchedule.id}`}
            className={classes.link}
          >
            <EditIcon className={classes.marginRight} />
          </Link>
          {singleSchedule.workDays.map((eachWorkDay) => (
            <div key={Math.random() * 10000} className={classes.scheduleDays}>
              <Typography>{eachWorkDay}</Typography>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default EmployeeSchedule;
