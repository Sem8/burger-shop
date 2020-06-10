import React, { useEffect, useState } from "react";
import axios from "axios";
import { withRouter, useHistory, useParams } from "react-router-dom";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(2),
        width: 800,
        display: "flex",
      },
    },
    wrapper: {
      width: "100%",
    },
    button: {
      margin: theme.spacing(1),
    },
  })
);

const UpdateEmployeeSchedule = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { schedId } = useParams();
  console.log("schedId: ", schedId);

  const [eachWorkDay, setEachWorkDay] = useState({});

  useEffect(() => {
    getUsersSched();
  }, []);

  const getUsersSched = async () => {
    const eachUserSched = await axios.get(
      `http://localhost:3001/schedule/${schedId}`
    );
    console.log("eachUserSched.data: ", eachUserSched.data);
    await setEachWorkDay(eachUserSched.data);
    // console.log(eachWorkDay);
  };

  console.log("eachWorkDay: ", eachWorkDay);

  const handleChange = (event) => {
    event.persist();
    setEachWorkDay((eachWorkDay) => ({
      ...eachWorkDay,
      [event.target.name]: event.target.value,
    }));
  };

  const updateSchedule = async (e, schedId, updateSchedule) => {
    e.preventDefault();

    updateSchedule = {
      ...eachWorkDay,
      workDays: eachWorkDay.workDays.split(","),
    };

    await axios
      .put(`http://localhost:3001/schedule/${schedId}`, updateSchedule)
      .then((res) => {
        console.log("updated schedule", res);
        setEachWorkDay(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    props.history.push(`/manageEmpSched`);
  };
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <TextField
          id="outlined-input"
          name="workDays"
          value={eachWorkDay.workDays}
          type="text"
          variant="outlined"
          style={{ width: "550px" }}
          margin="normal"
          multiline={true}
          rows={2}
          rowsMax={2}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<SaveIcon />}
          onClick={(e) => updateSchedule(e, schedId, eachWorkDay)}
        >
          Update
        </Button>
      </div>
    </div>
  );
};

export default withRouter(UpdateEmployeeSchedule);
