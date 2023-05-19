import React from "react";
import { useState } from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  const [wallSqr, setWallSqr] = useState(props.wallSqr);

  return (
    <>
      <div className={classes.card}>
      <h2>{props.lapetaOutputHeading}</h2>
        <div className={classes.rowContainer}>
          <label>Wall(in sqr Ft):</label>
          <span>{props.wallSqr}</span>
          {/* {console.log(props.wallSqr)} */}
        </div>
        <div className={classes.rowContainer}>
          <label>Rs. per sqr ft:</label>
          {props.perTileSqrFtPrice}
          <label>Per box sqr ft</label>
          {props.perBoxSqrFt}
        </div>
        <div className={classes.rowContainer}>
          <label>Per tile sqr ft:</label>
          {props.perTileSqrFt}
          <label>Total Boxes:</label>
          {props.totalTilesBoxes}
        </div>
        <div className={classes.rowContainer}>
          <label>Total Price</label>
          <span>{props.totalPrice}/-</span>
        </div>
      </div>
    </>
  );
};

export default Card;
