import React from "react";
import Lapeta from "./Lapeta";
import LengthWidthHeight from "./LengthWidthHeight";
import SquareFeet from "./SquareFeet";
import LengthWidth from "./LengthWidth";
import classes from "./CostmerSizeSelector.module.css";
import { useState } from "react";

const CostmerSizeSelector = (props) => {
  const [lapetaVisibility, setlapetaVisibility] = useState(true);
  const [LWHVisibility, setLWHVisibility] = useState(false);
  const [squareFeetVisibility, setsquareFeetVisibility] = useState(false);
  const [LWVisibility, setLWVisibility] = useState(false);
  
  const costmerSizeHandler = (costmerSize) => (event) => {
    if (costmerSize == "Lapeta") {
      setlapetaVisibility(true);
      setLWHVisibility(false);
      setsquareFeetVisibility(false);
      setLWVisibility(false);
      return;
    }
    if (costmerSize == "LWH") {
      setLWHVisibility(true);
      setlapetaVisibility(false);
      setsquareFeetVisibility(false);
      setLWVisibility(false);
      return;
    }
    if (costmerSize == "Sqr Ft") {
      setsquareFeetVisibility(true);
      setlapetaVisibility(false);
      setLWHVisibility(false);
      setLWVisibility(false);
      return;
    }
    if (costmerSize == "LW") {
      setLWVisibility(true);
      setlapetaVisibility(false);
      setLWHVisibility(false);
      setsquareFeetVisibility(false);
      return;
    }
  };
  return (
    <>
      <h2 className={classes.costmerSize}>Customer Providing</h2>
      <div className={classes.costmerSize}>
        {props.sizeProvided.map((item, index) => {
          return (
            <label key={index} title={item}>
              <input
                type="radio"
                name="sizeProvided"
                value={item}
                title={item}
                defaultChecked={item == "Lapeta" ? true : false}
                onClick={costmerSizeHandler(item)}
              />
              {item}
            </label>
          );
        })}
      </div>
      {lapetaVisibility && <Lapeta />}
      {LWHVisibility && <LengthWidthHeight />}
      {squareFeetVisibility && <SquareFeet />}
      {LWVisibility && <LengthWidth />}
    </>
  );
};

export default CostmerSizeSelector;
