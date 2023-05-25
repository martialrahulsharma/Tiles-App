import React, { useState } from "react";
import Card from "./Card";
import TilesRelatedInput from "./TilesRelatedInput";
import DarkHighLiteCard from "./DarkHighLiteCard";
import DarkTile from "./DHL/DarkTile";
// import HighlightTile from "./DHL/HighLightTile";
// import LightTile from "./DHL/LightTile";
import classes from "./DarkHighLite.module.css";

let LWHComponentTiles;
let roomWallSqft = 0;
let remainRoomWallSqft = 0;

const DarkHighLite = () => {
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
  const [darkTile, setDarkTile] = useState({
    height: "",
    width: "",
    tileAxis: "Horizontal",
    numberOfWall: 1,
    setNumberOfWall: 4,
  });

  const [outputState, setOutputState] = useState({
    lapeta: 0,
    wallSqrFt: 0,
    perBoxSqrFt: 0,
    perTileSqrFt: 0,
    perTileSqrFtPrice: 0,
    totalTilesBoxes: 0,
    totalPrice: 0,

    darkSqft: 0,
    darkBoxes: 0,
    highLightSqft: 0,
    highLightBoxes: 0,
    lightSqft: 0,
    lightBoxes: 0,
  });

  const [updateCard, setUpdateCard] = useState(false);

  // const [length, setLength] = useState("");
  // const [width, setWidth] = useState("");
  // const [height, setHeight] = useState("");
  // const [doorSize, setDoorSize] = useState("");

  let arr = [1, 2, 3, 4];

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
    // setWidth(event.target.value);
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
    // setHeight(event.target.value);
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
    // setDoorSize(event.target.value);
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

  const darkHeightHandler = (darkHeight) => {
    setDarkTile((prev) => {
      return { ...prev, height: (prev.height = darkHeight) };
    });
  };
  const darkWidthHandler = (darkWidth) => {
    setDarkTile((prev) => {
      return { ...prev, width: (prev.width = darkWidth) };
    });
  };
  const darkAxisHandler = (darkAxis) => {
    setDarkTile((prev) => {
      return { ...prev, tileAxis: (prev.tileAxis = darkAxis) };
    });
  };
  const darkNumberOfWallHandler = (darkNumberOfWall) => {
    setDarkTile((prev) => {
      return { ...prev, numberOfWall: (prev.numberOfWall = darkNumberOfWall) };
    });
  };
  const DHLSubmitHandler = (event) => {
    event.preventDefault();
    // console.log(darkTile.width);
    setUpdateCard(true);
    let lapet = roomOf.lengths * 2 + roomOf.width * 2 - roomOf.doorSize;
    roomWallSqft = roomOf.height * lapet;
    if (darkTile.height > roomOf.height) {
      alert("check dark height");
      return;
    }

    if (darkTile.numberOfWall > darkTile.setNumberOfWall) {
      alert("Number of wall should be less than 4 or equal");
      return;
    }

    if (darkTile.numberOfWall == 1) {
      if(Number(darkTile.width) <= Number(roomOf.width)){
        outputState.darkSqft = darkTile.height * darkTile.width
      }else{
        alert("Dark width should be equal or less than room width");
        return;
      }
    }
    if (darkTile.numberOfWall == 2) {
      outputState.darkSqft = darkTile.height * darkTile.width * 2;
    }
    if (darkTile.numberOfWall == 3) {
      outputState.darkSqft = darkTile.height * darkTile.width;
    }

    if (darkTile.numberOfWall == 4) {
      outputState.darkSqft = darkTile.height * lapet;
    }

    remainRoomWallSqft = roomWallSqft - outputState.darkSqft;
    

    setUpdateCard(true);
    setOutputState((prev) => {
      return {
        lapeta: lapet,
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

        darkSqft: prev.darkSqft,
        darkBoxes: (prev.darkBoxes = Math.ceil(
          prev.darkSqft / prev.perBoxSqrFt
        )),
      };
    });
  };

  return (
    <>
      <div className={classes.lwh}>
        <form onSubmit={DHLSubmitHandler}>
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
            <input
              type="number"
              value={roomOf.doorSize}
              onChange={lwhDoorSizeHandler}
            />
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
          <DarkTile
            darkTotalBox={outputState.darkBoxes}
            darkSqft={outputState.darkSqft}
            // onDarkHandler={darkHandler}
            onDarkHeightHandler={darkHeightHandler}
            onDarkWidthHandler={darkWidthHandler}
            onDarkAxisHandler={darkAxisHandler}
            onDarkNumberOfWallHandler={darkNumberOfWallHandler}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
      {updateCard && (
        <Card
          OutputHeading="DHL Output"
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
      {
        <DarkHighLiteCard
          heading={"Dark"}
          sqrft={outputState.darkSqft}
          darkBoxes={outputState.darkBoxes}
        />
      }
      {<DarkHighLiteCard heading={"Highlight"} sqrft={"152"} boxes={"20"} />}
      {<DarkHighLiteCard heading={"Light"} sqrft={"152"} boxes={"20"} />}
    </>
  );
};

export default DarkHighLite;
