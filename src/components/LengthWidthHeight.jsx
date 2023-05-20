import React from "react";
import TilesRelatedInput from "./TilesRelatedInput";
import Card from "./Card";
import classes from "./LengthWidthHeight.module.css";
import { useState } from "react";

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

  // const [length, setLength] = useState("");
  // const [width, setWidth] = useState("");
  // const [height, setHeight] = useState("");
  // const [doorSize, setDoorSize] = useState("");

  const lengthHandler = (event) => {
    // setLength(event.target.value);
    setRoomOf((prev) => {
      sessionStorage.setItem(
        "LWHComponent",
        JSON.stringify({ ...LWHComponentTiles, length: Number(event.target.value) })
      );
      return { ...prev, lengths: (roomOf.lengths = event.target.value) };
    });
  };
  const widthHandler = (event) => {
    // setWidth(event.target.value);
    setRoomOf((prev) => {
      sessionStorage.setItem(
        "LWHComponent",
        JSON.stringify({ ...LWHComponentTiles, width: Number(event.target.value) })
      );
      return { ...prev, width: (roomOf.width = event.target.value) };
    });
  };
  const heightHandler = (event) => {
    // setHeight(event.target.value);
    setRoomOf((prev) => {
      sessionStorage.setItem(
        "LWHComponent",
        JSON.stringify({ ...LWHComponentTiles, height: Number(event.target.value) })
      );
      return { ...prev, height: (roomOf.height = event.target.value) };
    });
  };
  const lwhDoorSizeHandler = (event) => {
    // setDoorSize(event.target.value);
    setRoomOf((prev) => {
      sessionStorage.setItem(
        "LWHComponent",
        JSON.stringify({ ...LWHComponentTiles, doorSize: Number(event.target.value) })
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
        JSON.stringify({ ...LWHComponentTiles, tilePricePerBox: Number(tilePricePerBox) })
      );
      return {
        ...state,
        tilePricePerBox: (state.tilePricePerBox = tilePricePerBox),
      };
    });
  };


  const LWHSubmitHandler = (event) => {
    event.preventDefault();
    console.log("LWHSubmitHandler");
    setUpdateCard(true);
    console.log(tileInput.tileLenght);
  };

  return (
    <div className={classes.lwh}>
      <form onSubmit={LWHSubmitHandler}>
        <label>
          Enter Length, Width, Height
          <input
            type="number"
            value={roomOf.lengths}
            onChange={lengthHandler}
            placeholder="length"
          />
          <input
            type="number"
            value={roomOf.width}
            onChange={widthHandler}
            placeholder="width"
          />
          <input
            type="number"
            value={roomOf.height}
            onChange={heightHandler}
            placeholder="height"
          />
        </label>
        <label>
          Enter Door Size
          <input type="number" value={roomOf.doorSize} onChange={lwhDoorSizeHandler} />
        </label>
        <TilesRelatedInput
          LWHComponent="LWHComponent"
          length={roomOf.lengths}
          width={roomOf.width}
          height={roomOf.height}
          doorSize={roomOf.doorSize}
          onLengthTile={tileLengthHandler}
          onWidthTile={tileWidthHandler}
          onTileInABox={tileInABoxHandler}
          onTilePricePerBox={tilePricePerBoxHandler}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
    // {updateCard && (
    //   <Card
    //     lwhOutputHeading="LWH Output"
    //     wallSqr={outputState.wallSqrFt}
    //     perTileSqrFtPrice={
    //       outputState.perTileSqrFtPrice === "NaN"
    //         ? 0
    //         : outputState.perTileSqrFtPrice
    //     }
    //     perBoxSqrFt={outputState.perBoxSqrFt}
    //     perTileSqrFt={outputState.perTileSqrFt}
    //     totalTilesBoxes={
    //       outputState.totalTilesBoxes === Infinity
    //         ? 0
    //         : outputState.totalTilesBoxes
    //     }
    //     totalPrice={
    //       isNaN(outputState.totalPrice) ? 0 : outputState.totalPrice
    //     }
    //   />
    // )}
  );
};

export default LengthWidthHeight;
