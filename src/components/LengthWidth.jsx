import React from "react";
import TilesRelatedInput from "./TilesRelatedInput";
import Card from "./Card";
import classes from "./LengthWidth.module.css";
import { useState } from "react";
import Button from "./Button";
import ErrorModal from "../UI/ErrorModal";

let LWComponentTiles;
const LengthWidth = () => {
  LWComponentTiles = JSON.parse(sessionStorage.LWComponent);

  const [roomOf, setRoomOf] = useState({
    lengths: LWComponentTiles.length,
    width: LWComponentTiles.width,
  });

  const [tileInput, setTileInput] = useState({
    tileLenght: LWComponentTiles.tileLength,
    tileWidth: LWComponentTiles.tileWidth,
    tileInABox: LWComponentTiles.tileInABox,
    tilePricePerBox: LWComponentTiles.tilePricePerBox,
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

  const lengthHandler = (event) => {
    setRoomOf((prev) => {
      sessionStorage.setItem(
        "LWComponent",
        JSON.stringify({
          ...LWComponentTiles,
          length: Number(event.target.value),
        })
      );
      return { ...prev, lengths: (roomOf.lengths = event.target.value) };
    });
  };
  const widthHandler = (event) => {
    setRoomOf((prev) => {
      sessionStorage.setItem(
        "LWComponent",
        JSON.stringify({
          ...LWComponentTiles,
          width: Number(event.target.value),
        })
      );
      return { ...prev, width: (roomOf.width = event.target.value) };
    });
  };

  const tileLengthHandler = (tileLenght) => {
    setTileInput((state) => {
      sessionStorage.setItem(
        "LWComponent",
        JSON.stringify({ ...LWComponentTiles, tileLength: Number(tileLenght) })
      );
      return { ...state, tileLenght: (state.tileLenght = tileLenght) };
    });
  };

  const tileWidthHandler = (tileWidth) => {
    setTileInput((state) => {
      sessionStorage.setItem(
        "LWComponent",
        JSON.stringify({ ...LWComponentTiles, tileWidth: Number(tileWidth) })
      );
      return { ...state, tileWidth: (state.tileWidth = tileWidth) };
    });
  };
  const tileInABoxHandler = (tileInABox) => {
    setTileInput((state) => {
      sessionStorage.setItem(
        "LWComponent",
        JSON.stringify({ ...LWComponentTiles, tileInABox: Number(tileInABox) })
      );
      return { ...state, tileInABox: (state.tileInABox = tileInABox) };
    });
  };
  const tilePricePerBoxHandler = (tilePricePerBox) => {
    setTileInput((state) => {
      sessionStorage.setItem(
        "LWComponent",
        JSON.stringify({
          ...LWComponentTiles,
          tilePricePerBox: Number(tilePricePerBox),
        })
      );
      return {
        ...state,
        tilePricePerBox: (state.tilePricePerBox = tilePricePerBox),
      };
    });
  };

  const errorHandler = () =>{
    setError(null);
  }

  const LWSubmitHandler = (event) => {
    event.preventDefault();
    if((roomOf.lengths && roomOf.width) == ("" || 0)){
      setError({
        title: 'Invalid length, width',
        message: 'Please, Check length and width field',
      })
      return;
    }
    setUpdateCard(true);

    event.preventDefault();
    let lapeta = roomOf.lengths * 2 + roomOf.width * 2;
    setUpdateCard(true);
    setOutputState((prev) => {
      return {
        lapeta: (prev.lapeta = lapeta),
        wallSqrFt: (prev.wallSqrFt = roomOf.lengths * roomOf.width),
        perTileSqrFt: (prev.perTileSqrFt =
          (tileInput.tileLenght * tileInput.tileWidth) / 144),
        perBoxSqrFt: (prev.perBoxSqrFt =
          prev.perTileSqrFt * tileInput.tileInABox),
        totalTilesBoxes: (prev.totalTilesBoxes = Math.ceil(
          prev.wallSqrFt / prev.perBoxSqrFt
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
      <div className={classes.lw}>
        <form onSubmit={LWSubmitHandler}>
          <div className={classes.columnContainer}>
            <label>Enter Length, Width</label>
            <div className={classes.rowContainer}>
              <input
                id="roomLength"
                type="number"
                value={roomOf.lengths}
                onChange={lengthHandler}
                placeholder="Length"
              />
              <input
                id="roomwidth"
                type="number"
                value={roomOf.width}
                onChange={widthHandler}
                placeholder="Width"
              />
            </div>
          </div>

          <TilesRelatedInput
            LWHComponent="LWComponent"
            length={roomOf.lengths}
            width={roomOf.width}
            onLengthTile={tileLengthHandler}
            onWidthTile={tileWidthHandler}
            onTileInABox={tileInABoxHandler}
            onTilePricePerBox={tilePricePerBoxHandler}
          />
          <Button type="submit" >Submit</Button>
        </form>
      </div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      {updateCard && (
        <Card
          OutputHeading="LW Output"
          lapeta={outputState.lapeta}
          wallSqr={outputState.wallSqrFt}
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

export default LengthWidth;
