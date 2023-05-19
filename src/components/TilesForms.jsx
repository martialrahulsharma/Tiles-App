import React, { useState } from "react";
import classes from "./TilesForms.module.css";
import CostmerSizeSelector from "./CostmerSizeSelector";

const TilesForm = (props) => {
  const [roomLength, setRoomLenght] = useState("");
  const [roomWidth, setRoomWidth] = useState("");
  const [roomHeight, setRoomHeight] = useState("");
  const [doorSize, setDoorSize] = useState("");
  const [tileWidth, setTileWidth] = useState("");
  const [tileLength, setTileLenght] = useState("");
  const [tileInBox, setTileInBox] = useState("");
  const [tileRate, setTileRate] = useState("");
  const [floorTileWidth, setFloorTileWidth] = useState("");
  const [floorTileLength, setFloorTileLength] = useState("");
  const [floorTileInBox, setFloorTileInBox] = useState("");
  const [floorTileRate, setFloorTileRate] = useState("");

  const roomLengthHandler = (event) => {
    setRoomLenght(() => {
      return event.target.value;
    });
  };
  const roomWidthHandler = (event) => {
    setRoomWidth(() => {
      return event.target.value;
    });
  };
  const roomHeightHandler = (event) => {
    setRoomHeight(() => {
      return event.target.value;
    });
  };
  const doorSizeHandler = (event) => {
    setDoorSize(() => {
      return event.target.value;
    });
  };
  const tileWidthHandler = (event) => {
    setTileWidth(() => {
      return event.target.value;
    });
  };
  const tileLengthHandler = (event) => {
    setTileLenght(() => {
      return event.target.value;
    });
  };
  const tileInBoxhHandler = (event) => {
    setTileInBox(() => {
      return event.target.value;
    });
  };

  const roomWallTileRateHandler = (event) => {
    setTileRate(() => {
      return event.target.value;
    });
  };
  const floorTileWidthHandler = (event) => {
    setFloorTileWidth(() => {
      return event.target.value;
    });
  };
  const floorTileLengthHandler = (event) => {
    setFloorTileLength(() => {
      return event.target.value;
    });
  };
  const floorTileInBoxhHandler = (event) => {
    setFloorTileInBox(() => {
      return event.target.value;
    });
  };

  const floorTileRateHandler = (event) => {
    setFloorTileRate(() => {
      return event.target.value;
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    let roomLenWidth = roomLength * 2 + roomWidth * 2;
    console.log(roomLenWidth);
    let lapeta = roomLenWidth - doorSize;
    // console.log(roomActualSize);
    let wallSqr = lapeta * roomHeight;

    let oneTileSizeInSqrFt = (tileWidth * tileLength) / 144;
    let oneBoxInSqrFt = parseFloat(oneTileSizeInSqrFt * tileInBox).toFixed(2);
    console.log(oneBoxInSqrFt);

    let howManytilesBoxes = wallSqr / oneBoxInSqrFt;
    howManytilesBoxes = Math.ceil(howManytilesBoxes);
    console.log(wallSqr);

    let floorOneTileSizeInSqrFt = (floorTileWidth * floorTileLength) / 144;
    let floorOneBoxInSqrFt = parseFloat(
      floorOneTileSizeInSqrFt * floorTileInBox
    ).toFixed(2);
    let floorHowManytilesBoxes = parseFloat(
      (roomLength * roomWidth) / floorOneBoxInSqrFt
    ).toFixed(2);
    floorHowManytilesBoxes = Math.ceil(floorHowManytilesBoxes);
    // console.log(Math.round(floorHowManytilesBoxes * 100) / 100);

    // Wall floor and total price
    let wallRate = tileRate * howManytilesBoxes;
    let floorRate = floorTileRate * floorHowManytilesBoxes;
    let totalRate = wallRate + floorRate;

    let allInfoOfTiles = {
      id: Math.random(),
      wallSqr: wallSqr,
      lapeta: lapeta,
      wallOneBoxInSqrFt: oneBoxInSqrFt,
      wallHowManytilesBoxes: howManytilesBoxes,
      floorOneBoxInSqrFt: floorOneBoxInSqrFt,
      floorHowManytilesBoxes: floorHowManytilesBoxes,
      wallRs: wallRate,
      floorRs: floorRate,
      totalRs: totalRate,
    };
    props.onSaveDate(allInfoOfTiles);
  };
  return (
    <>
    <div>
          {/* <CostmerSizeSelector sizeProvided="lapeta" />
          <CostmerSizeSelector sizeProvided="LWH" />
          <CostmerSizeSelector sizeProvided="SqrFt Floor" />
          <CostmerSizeSelector sizeProvided="SqrFt Wall" /> */}
        </div>
      <form onSubmit={formSubmitHandler} className={classes.formControl}>
        
        <div className={classes.columnContainer}>
          <h2>Input Wall</h2>
          <label>
            Room Length
            <input
              type="text"
              value={roomLength}
              onChange={roomLengthHandler}
            />
          </label>
          <label>
            Room Width
            <input type="text" value={roomWidth} onChange={roomWidthHandler} />
          </label>
          <label>
            Room Height
            <input
              type="text"
              value={roomHeight}
              onChange={roomHeightHandler}
            />
          </label>
          <label>
            Door Size (feet)
            <input type="text" value={doorSize} onChange={doorSizeHandler} />
          </label>
          <h3>Tile Size</h3>
          <label>
            Length (inch)
            <input
              type="text"
              value={tileLength}
              onChange={tileLengthHandler}
            />
          </label>
          <label>
            Width (inch)
            <input type="text" value={tileWidth} onChange={tileWidthHandler} />
          </label>
          <label>
            Tiles in a Box
            <input type="text" value={tileInBox} onChange={tileInBoxhHandler} />
          </label>
          <label>
            Rs.
            <input
              type="text"
              value={tileRate}
              onChange={roomWallTileRateHandler}
            />
          </label>
        </div>
        <div className={classes.columnContainer}>
          <h2>Input Floor Size</h2>
          <label>
            Tile Lenght
            <input
              type="text"
              value={floorTileLength}
              onChange={floorTileLengthHandler}
            />
          </label>
          <label>
            Tile Width
            <input
              type="text"
              value={floorTileWidth}
              onChange={floorTileWidthHandler}
            />
          </label>
          <label>
            Tiles in a Box
            <input
              type="text"
              value={floorTileInBox}
              onChange={floorTileInBoxhHandler}
            />
          </label>
          <label>
            Rs.
            <input
              type="text"
              value={floorTileRate}
              onChange={floorTileRateHandler}
            />
          </label>
        </div>
        <div className={classes.rowContainer}>
          <input type="reset" value="Reset" />
          <input type="Submit" />
        </div>
      </form>
    </>
  );
};

/* 4X5X7
xcb
*/

export default TilesForm;
