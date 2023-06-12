import React from "react";
import { useState } from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  const [wallSqr, setWallSqr] = useState(props.wallSqr);

  return (
    <>
      <div className={classes.card}>
        <div className={classes.heading}>
          <h2>{props.OutputHeading}</h2>
        </div>
        <div className={classes.rowContainer}>
          {props.lapeta !== 0 ? (
            <div className={classes.contentRowContainer}>
              <label>Lapeta(in sqr Ft):</label>
              <span>{props.lapeta}</span>
            </div>
          ) : (
            ""
          )}
          {props.wallSqr !== "0" ? (
            <div className={classes.contentRowContainer}>
              <label>Wall(in sqr Ft):</label>
              <span>{props.wallSqr}</span>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={classes.rowContainer}>
          <div className={classes.contentRowContainer}>
            <label>Rs. per sqr ft:</label>
            {props.perTileSqrFtPrice}
          </div>
          <div className={classes.contentRowContainer}>
            <label>Per box sqr ft:</label>
            {props.perBoxSqrFt}
          </div>
        </div>
        <div className={classes.rowContainer}>
          <div className={classes.contentRowContainer}>
            <label>Per tile sqr ft:</label>
            {props.perTileSqrFt}
          </div>
          <div className={classes.contentRowContainer}>
            <label>Total Boxes:</label>
            {props.totalTilesBoxes}
          </div>
        </div>
        <div className={classes.rowContainer}>
        <div className={classes.contentRowContainer}>
          <label>Total Price:</label>
          <span>{props.totalPrice}</span>
</div>
        </div>
      </div>
    </>
  );
};

export default Card;
