import React from "react";
import { useState } from "react";
import TilesRelatedInput from "./TilesRelatedInput";
import Card from "./Card";
import classes from "./Lapeta.module.css";
import { useEffect } from "react";

let lapetaComponentTiles;
// lapetaComponentTiles = JSON.parse(sessionStorage.LapetaComponent);

const Lapeta = () => {
  lapetaComponentTiles = JSON.parse(sessionStorage.LapetaComponent);

  const [roomOf, setRoomOf] = useState({
    lapeta: lapetaComponentTiles.lapeta,
    height: lapetaComponentTiles.height,
    doorSize: lapetaComponentTiles.doorSize,
  });

  const [tileInput, setTileInput] = useState({
    tileLenght: lapetaComponentTiles.tileLength,
    tileWidth: lapetaComponentTiles.tileWidth,
    tileInABox: lapetaComponentTiles.tileInABox,
    tilePricePerBox: lapetaComponentTiles.tilePricePerBox,
  });

  const [outputState, setOutputState] = useState({
    lapeta:0,
    wallSqrFt: 0,
    perBoxSqrFt: 0,
    perTileSqrFt: 0,
    perTileSqrFtPrice: 0,
    totalTilesBoxes: 0,
    totalPrice: 0,
  });

  const [updateCard, setUpdateCard] = useState(false);

  const lapetaHandler = (event) => {
    setRoomOf((prev) => {
      sessionStorage.setItem(
        "LapetaComponent",
        JSON.stringify({ ...lapetaComponentTiles, lapeta: Number(event.target.value) })
      );
      return { ...prev, lapeta: (roomOf.lapeta = event.target.value) };
    });
  };
  const heightHandler = (event) => {
    // setHeight(event.target.value);
    setRoomOf((prev) => {
      sessionStorage.setItem(
        "LapetaComponent",
        JSON.stringify({ ...lapetaComponentTiles, height: Number(event.target.value) })
      );
      return {...prev, height: (roomOf.height = event.target.value) };
    });
  };
  const doorSizeHandler = (event) => {
    setRoomOf((prev) => {
      sessionStorage.setItem(
        "LapetaComponent",
        JSON.stringify({ ...lapetaComponentTiles, doorSize: Number(event.target.value) })
      );
      return {...prev,  doorSize: (roomOf.doorSize = event.target.value) };
    });
  };
  const tileLengthHandler = (tileLenght) => {
    console.log(tileLenght);
    setTileInput((state) => {
      sessionStorage.setItem(
        "LapetaComponent",
        JSON.stringify({ ...lapetaComponentTiles, tileLength: Number(tileLenght) })
      );
      return { ...state, tileLenght: (state.tileLenght = tileLenght) };
    });
  };

  const tileWidthHandler = (tileWidth) => {
    setTileInput((state) => {
      sessionStorage.setItem(
        "LapetaComponent",
        JSON.stringify({ ...lapetaComponentTiles, tileWidth: Number(tileWidth) })
      );
      return { ...state, tileWidth: (state.tileWidth = tileWidth) };
    });
  };
  const tileInABoxHandler = (tileInABox) => {
    setTileInput((state) => {
      sessionStorage.setItem(
        "LapetaComponent",
        JSON.stringify({ ...lapetaComponentTiles, tileInABox: Number(tileInABox) })
      );
      return { ...state, tileInABox: (state.tileInABox = tileInABox) };
    });
  };
  const tilePricePerBoxHandler = (tilePricePerBox) => {
    setTileInput((state) => {
      sessionStorage.setItem(
        "LapetaComponent",
        JSON.stringify({ ...lapetaComponentTiles, tilePricePerBox: Number(tilePricePerBox) })
      );
      return {
        ...state,
        tilePricePerBox: (state.tilePricePerBox = tilePricePerBox),
      };
    });
  };

  const submitHandle = (event) => {
    event.preventDefault();
    console.log(outputState.lapeta);
    let lapet = roomOf.lapeta - roomOf.doorSize;
    setUpdateCard(true);
    setOutputState((prev) => {
      return {
        lapeta: (prev.lapeta),
        wallSqrFt: (prev.wallSqrFt = lapet * roomOf.height),
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
      <div className={classes.lapeta}>
        <form onSubmit={submitHandle}>
          <div>
          <label>
            Enter Lapeta
            <input
              type="number"
              value={roomOf.lapeta}
              onChange={lapetaHandler}
            />
          </label>
          <label>
            Enter Height
            <input type="number" value={roomOf.height} onChange={heightHandler} />
          </label>
          </div>
          <div>
          <label>
            Enter Door Size
            <input type="number" value={roomOf.doorSize} onChange={doorSizeHandler} />
          </label>
          </div>
          <TilesRelatedInput
            lapetaComponent='LapetaComponent'
            lapeta={roomOf.lapeta}
            height={roomOf.height}
            doorSize={roomOf.doorSize}
            onLengthTile={tileLengthHandler}
            onWidthTile={tileWidthHandler}
            onTileInABox={tileInABoxHandler}
            onTilePricePerBox={tilePricePerBoxHandler}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
      {updateCard && (
        <Card
          OutputHeading="Lapeta Output"
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

export default Lapeta;
