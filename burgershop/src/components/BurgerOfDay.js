import React from "react";

import { Typography } from "@material-ui/core";

const BurgerOfDay = (props) => {
  return (
    <>
      <Typography
        variant="h2"
        style={{
          padding: "20px",
          margin: "30px",
          textAlign: "center",
          background: "linear-gradient(45deg, #dd7230 30%, #f4c95d 90%)",
          boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
          borderRadius: 10,
        }}
      >
        Today's Burger Of The Day!
      </Typography>
      <Typography
        variant="h3"
        style={{
          width: "500px",
          padding: "80px",
          margin: "50px auto",
          textAlign: "center",
          fontWeight: "bold",
          background: "linear-gradient(45deg, #854d27 30%, #e7e393 90%)",
          borderRadius: 10,
        }}
      >
        {props.burgerOfDay}
      </Typography>
    </>
  );
};

export default BurgerOfDay;
