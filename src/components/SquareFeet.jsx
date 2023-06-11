import React, { useState } from "react";
import TilesRelatedInput from "./TilesRelatedInput";
import Card from "./Card";
import classes from "./SquareFeet.module.css";
import Button from "./Button";
import ErrorModal from "../UI/ErrorModal";

let SqrFtComponentTiles;
const SquareFeet = () => {
  SqrFtComponentTiles = JSON.parse(sessionStorage.SqrFtComponent);
  const [roomOf, setRoomOf] = useState({
    sqrft: SqrFtComponentTiles.sqrft,
  });

  const [tileInput, setTileInput] = useState({
    tileLenght: SqrFtComponentTiles.tileLength,
    tileWidth: SqrFtComponentTiles.tileWidth,
    tileInABox: SqrFtComponentTiles.tileInABox,
    tilePricePerBox: SqrFtComponentTiles.tilePricePerBox,
  });

  const [outputState, setOutputState] = useState({
    lapeta: 0,
    wallSqrFt: 0,
    perBoxSqrFt: 0,
    perTileSqrFt: 0,
    perTileSqrFtPrice: 0,
    totalTilesBoxes: 0,
    totalPrice: 0,
  });

  const [updateCard, setUpdateCard] = useState(false);
  const [error, setError] = useState();

  const [squareFeet, setSquareFeet] = useState("");

  const squareFeetHandler = (event) => {
    setSquareFeet(event.target.value);
    setRoomOf((prev) => {
      sessionStorage.setItem(
        "SqrFtComponent",
        JSON.stringify({
          ...SqrFtComponentTiles,
          sqrft: Number(event.target.value),
        })
      );
      return { ...prev, sqrft: (roomOf.sqrft = event.target.value) };
    });
  };

  const tileLengthHandler = (tileLenght) => {
    setTileInput((state) => {
      sessionStorage.setItem(
        "SqrFtComponent",
        JSON.stringify({
          ...SqrFtComponentTiles,
          tileLength: Number(tileLenght),
        })
      );
      return { ...state, tileLenght: (state.tileLenght = tileLenght) };
    });
  };

  const tileWidthHandler = (tileWidth) => {
    setTileInput((state) => {
      sessionStorage.setItem(
        "SqrFtComponent",
        JSON.stringify({ ...SqrFtComponentTiles, tileWidth: Number(tileWidth) })
      );
      return { ...state, tileWidth: (state.tileWidth = tileWidth) };
    });
  };
  const tileInABoxHandler = (tileInABox) => {
    setTileInput((state) => {
      sessionStorage.setItem(
        "SqrFtComponent",
        JSON.stringify({
          ...SqrFtComponentTiles,
          tileInABox: Number(tileInABox),
        })
      );
      return { ...state, tileInABox: (state.tileInABox = tileInABox) };
    });
  };
  const tilePricePerBoxHandler = (tilePricePerBox) => {
    setTileInput((state) => {
      sessionStorage.setItem(
        "SqrFtComponent",
        JSON.stringify({
          ...SqrFtComponentTiles,
          tilePricePerBox: Number(tilePricePerBox),
        })
      );
      return {
        ...state,
        tilePricePerBox: (state.tilePricePerBox = tilePricePerBox),
      };
    });
  };

  const errorHandler = () => {
    setError(null);
  };

  const sqrFtSubmitHandler = (event) => {
    event.preventDefault();
    if (roomOf.sqrft == ("" || 0)) {
      setError({
        title: "Invalid Square Feet",
        message: "Please, Check Sqrft field",
      });
      return;
    }
    setUpdateCard(true);

    event.preventDefault();
    setOutputState((prev) => {
      return {
        perTileSqrFt: (prev.perTileSqrFt =
          (tileInput.tileLenght * tileInput.tileWidth) / 144),
        perBoxSqrFt: (prev.perBoxSqrFt =
          prev.perTileSqrFt * tileInput.tileInABox),
        totalTilesBoxes: (prev.totalTilesBoxes = Math.ceil(
          roomOf.sqrft / prev.perBoxSqrFt
        )),
        perTileSqrFtPrice: Math.ceil(
          tileInput.tilePricePerBox / prev.perBoxSqrFt
        ).toFixed(2),
        totalPrice: tileInput.tilePricePerBox * prev.totalTilesBoxes,
      };
    });
  };

  return (
    <>
      <div className={classes.sqrFt}>
        <form onSubmit={sqrFtSubmitHandler}>
          <div className={classes.columnContainer}>
            <label>Enter Square Feet</label>
            <input
              type="number"
              value={roomOf.sqrft}
              onChange={squareFeetHandler}
              placeholder="sqrft"
            />
          </div>
          <TilesRelatedInput
            sqrft={roomOf.sqrft}
            tileLength={SqrFtComponentTiles.tileLength}
            tileWidth={SqrFtComponentTiles.tileWidth}
            tilePricePerBox={SqrFtComponentTiles.tileInABox}
            pricePerBox={SqrFtComponentTiles.tilePricePerBox}
            onLengthTile={tileLengthHandler}
            onWidthTile={tileWidthHandler}
            onTileInABox={tileInABoxHandler}
            onTilePricePerBox={tilePricePerBoxHandler}
          />
          <Button type="submit">Submit</Button>
        </form>
      </div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      {updateCard && (
        <Card
          OutputHeading="SqrFt Output"
          lapeta={0}
          wallSqr="0"
          perTileSqrFtPrice={
            outputState.perTileSqrFtPrice === "NaN"
              ? 0
              : outputState.perTileSqrFtPrice
          }
          perBoxSqrFt={outputState.perBoxSqrFt}
          perTileSqrFt={outputState.perTileSqrFt}
          totalTilesBoxes={
            outputState.totalTilesBoxes === Infinity
              ? 0
              : outputState.totalTilesBoxes
          }
          totalPrice={
            isNaN(outputState.totalPrice) ? 0 : outputState.totalPrice
          }
        />
      )}
    </>
  );
};

export default SquareFeet;
