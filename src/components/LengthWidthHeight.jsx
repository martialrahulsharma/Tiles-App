import React from "react";
import TilesRelatedInput from "./TilesRelatedInput";
import Card from "./Card";
import classes from "./LengthWidthHeight.module.css";
import { useState, useEffect } from "react";
import Button from "./Button";
import ErrorModal from "../UI/ErrorModal";

let LWHComponentTiles;

const LengthWidthHeight = () => {
  LWHComponentTiles = JSON.parse(sessionStorage.LWHComponent);
  const [roomOf, setRoomOf] = useState({
    lengths: LWHComponentTiles.length,
    width: LWHComponentTiles.width,
    height: LWHComponentTiles.height,
    doorSize: LWHComponentTiles.doorSize,
  });

  const [tileInput, setTileInput] = useState({
    tileLenght: LWHComponentTiles.tileLength,
    tileWidth: LWHComponentTiles.tileWidth,
    tileInABox: LWHComponentTiles.tileInABox,
    tilePricePerBox: LWHComponentTiles.tilePricePerBox,
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
        "LWHComponent",
        JSON.stringify({
          ...LWHComponentTiles,
          length: Number(event.target.value),
        })
      );
      return { ...prev, lengths: (roomOf.lengths = event.target.value) };
    });
  };
  const widthHandler = (event) => {
    setRoomOf((prev) => {
      sessionStorage.setItem(
        "LWHComponent",
        JSON.stringify({
          ...LWHComponentTiles,
          width: Number(event.target.value),
        })
      );
      return { ...prev, width: (roomOf.width = event.target.value) };
    });
  };
  const heightHandler = (event) => {
    setRoomOf((prev) => {
      sessionStorage.setItem(
        "LWHComponent",
        JSON.stringify({
          ...LWHComponentTiles,
          height: Number(event.target.value),
        })
      );
      return { ...prev, height: (roomOf.height = event.target.value) };
    });
  };
  const lwhDoorSizeHandler = (event) => {
    setRoomOf((prev) => {
      sessionStorage.setItem(
        "LWHComponent",
        JSON.stringify({
          ...LWHComponentTiles,
          doorSize: Number(event.target.value),
        })
      );
      return { ...prev, doorSize: (roomOf.doorSize = event.target.value) };
    });
  };

  const tileLengthHandler = (tileLenght) => {
    setTileInput((state) => {
      sessionStorage.setItem(
        "LWHComponent",
        JSON.stringify({ ...LWHComponentTiles, tileLength: Number(tileLenght) })
      );
      return { ...state, tileLenght: (state.tileLenght = tileLenght) };
    });
  };

  const tileWidthHandler = (tileWidth) => {
    setTileInput((state) => {
      sessionStorage.setItem(
        "LWHComponent",
        JSON.stringify({ ...LWHComponentTiles, tileWidth: Number(tileWidth) })
      );
      return { ...state, tileWidth: (state.tileWidth = tileWidth) };
    });
  };
  const tileInABoxHandler = (tileInABox) => {
    setTileInput((state) => {
      sessionStorage.setItem(
        "LWHComponent",
        JSON.stringify({ ...LWHComponentTiles, tileInABox: Number(tileInABox) })
      );
      return { ...state, tileInABox: (state.tileInABox = tileInABox) };
    });
  };
  const tilePricePerBoxHandler = (tilePricePerBox) => {
    setTileInput((state) => {
      sessionStorage.setItem(
        "LWHComponent",
        JSON.stringify({
          ...LWHComponentTiles,
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

  const LWHSubmitHandler = (event) => {
    event.preventDefault();
    if ((roomOf.lengths && roomOf.width && roomOf.height) == ("" || 0)) {
      setError({
        title: "Invalid LWH",
        message: "Please check length, width and field.",
      });
      return;
    }
    setUpdateCard(true);

    event.preventDefault();
    let lapet = roomOf.lengths * 2 + roomOf.width * 2 - roomOf.doorSize;
    setUpdateCard(true);
    setOutputState((prev) => {
      return {
        lapeta: lapet,
        wallSqrFt: Math.ceil((prev.wallSqrFt = lapet * roomOf.height)),
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
      <div className={classes.lwh}>
        <form onSubmit={LWHSubmitHandler}>
          <div className={classes.columnContainer}>
            <div className={classes.columnContainer}>
              <label>Enter Length, Width, Height</label>
            </div>
            <div className={classes.rowContainer}>
              <input
                id="roomlenght"
                type="number"
                value={roomOf.lengths}
                onChange={lengthHandler}
                placeholder="length"
              />
              <input
                id="roomwidth"
                type="number"
                value={roomOf.width}
                onChange={widthHandler}
                placeholder="width"
              />
              <input
                id="roomheight"
                type="number"
                value={roomOf.height}
                onChange={heightHandler}
                placeholder="height"
              />
            </div>
            <label>Enter Door Size</label>
            <input
              id="roomdoorsize"
              type="number"
              value={roomOf.doorSize}
              onChange={lwhDoorSizeHandler}
              placeholder="door size"
            />
          </div>

          <TilesRelatedInput
            LWHComponent="LWHComponent"
            length={roomOf.lengths}
            width={roomOf.width}
            height={roomOf.height}
            doorSize={roomOf.doorSize}
            tileLength={LWHComponentTiles.tileLength}
            tileWidth={LWHComponentTiles.tileWidth}
            tilePricePerBox={LWHComponentTiles.tileInABox}
            pricePerBox={LWHComponentTiles.tilePricePerBox}
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

export default LengthWidthHeight;
