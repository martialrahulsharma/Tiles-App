import React, { useState } from "react";
import Card from "./Card";
import TilesRelatedInput from "./TilesRelatedInput";
import DarkHighLiteCard from "./DarkHighLiteCard";
import DarkTile from "./DHL/DarkTile";
import HighlightTile from "./DHL/HighLightTile";
import LightTile from "./DHL/LightTile";
import classes from "./DarkHighLite.module.css";
import Button from "./Button";

let LWHComponentTiles;

const DarkHighLite = () => {
  LWHComponentTiles = JSON.parse(sessionStorage.LWHComponent);

  const [remainRoomWallSqft, setRemainRoomWallSqft] = useState({
    wall: 0,
  });

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
    checkbox: false,
    height: "",
    width: "",
    numberOfWall: 1,
    setNumberOfWall: 4,
  });
  //---------HighLight state start---------
  const [highLightTile, setHighLightTile] = useState({
    checkbox: false,
    height: "",
    width: "",
    numberOfWall: 1,
    setNumberOfWall: 4,
  });
  //---------HighLight state end-----------
  //---------Light state start---------
  const [lightTile, setlightTile] = useState({
    checkbox: false,
    height: "",
    width: "",
    numberOfWall: 1,
    setNumberOfWall: 4,
  });
  //---------Light state end-----------

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

  // ------------------Dark tile start functionality---------------

  const darkCheckboxHandler = (darkCheckboxValue) => {
    setDarkTile((prev) => {
      return { ...prev, checkbox: (prev.checkbox = darkCheckboxValue) };
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

  const darkNumberOfWallHandler = (darkNumberOfWall) => {
    setDarkTile((prev) => {
      return { ...prev, numberOfWall: (prev.numberOfWall = darkNumberOfWall) };
    });
  };
  // ------------------Dark tile end functionality---------------

  // ------------------HihgLight tile start functionality---------------
  const highLightCheckboxHandler = (highLightCheckboxValue) => {
    setHighLightTile((prev) => {
      return { ...prev, checkbox: (prev.checkbox = highLightCheckboxValue) };
    });
  };

  const highLightHeightHandler = (highLightHeight) => {
    setHighLightTile((prev) => {
      return { ...prev, height: (prev.height = highLightHeight) };
    });
  };
  const highLightWidthHandler = (highLightWidth) => {
    setHighLightTile((prev) => {
      return { ...prev, width: (prev.width = highLightWidth) };
    });
  };

  const highLightNumberOfWallHandler = (highLightNumberOfWall) => {
    setHighLightTile((prev) => {
      return {
        ...prev,
        numberOfWall: (prev.numberOfWall = highLightNumberOfWall),
      };
    });
  };
  // ------------------HighLight tile end functionality---------------
  // ------------------Light tile start functionality---------------
  const lightCheckboxHandler = (lightCheckboxValue) => {
    setlightTile((prev) => {
      return { ...prev, checkbox: (prev.checkbox = lightCheckboxValue) };
    });
  };

  const lightHeightHandler = (lightHeight) => {
    setlightTile((prev) => {
      return { ...prev, height: (prev.height = lightHeight) };
    });
  };
  const lightWidthHandler = (lightWidth) => {
    setlightTile((prev) => {
      return { ...prev, width: (prev.width = lightWidth) };
    });
  };

  const lightNumberOfWallHandler = (lightNumberOfWall) => {
    setlightTile((prev) => {
      return { ...prev, numberOfWall: (prev.numberOfWall = lightNumberOfWall) };
    });
  };
  // ------------------Light tile end functionality---------------

  const DHLSubmitHandler = (event) => {
    event.preventDefault();
    setUpdateCard(true);
    let lapet = roomOf.lengths * 2 + roomOf.width * 2 - roomOf.doorSize;
    remainRoomWallSqft.wall = roomOf.height * lapet;
    // reset DHL data first
    outputState.darkSqft = 0;
    outputState.darkBoxes = 0;
    outputState.highLightSqft = 0;
    outputState.highLightBoxes = 0;
    outputState.lightSqft = 0;
    outputState.lightBoxes = 0;
    //--------------Dark condition start--------
    if (darkTile.checkbox == true && remainRoomWallSqft.wall != 0) {
      if ((darkTile.height && darkTile.width) != "") {
        if (darkTile.height > roomOf.height) {
          alert("check dark height");
          return;
        }

        if (darkTile.numberOfWall > darkTile.setNumberOfWall) {
          alert("Number of wall should be less than 4 or equal");
          return;
        }

        if (darkTile.numberOfWall == 1) {
          if (Number(darkTile.width) <= Number(roomOf.width)) {
            outputState.darkSqft = darkTile.height * darkTile.width;
            remainRoomWallSqft.wall =
              remainRoomWallSqft.wall - outputState.darkSqft;
          } else {
            alert("Dark width should be equal or less than room width");
            return;
          }
        }
        if (darkTile.numberOfWall == 2) {
          outputState.darkSqft = darkTile.height * darkTile.width * 2;
          remainRoomWallSqft.wall =
            remainRoomWallSqft.wall - outputState.darkSqft;
        }
        if (darkTile.numberOfWall == 3) {
          outputState.darkSqft = darkTile.height * darkTile.width;
          remainRoomWallSqft.wall =
            remainRoomWallSqft.wall - outputState.darkSqft;
        }

        if (darkTile.numberOfWall == 4) {
          outputState.darkSqft = darkTile.height * lapet;
          remainRoomWallSqft.wall =
            remainRoomWallSqft.wall - outputState.darkSqft;
        }
      }
    }
    //--------------Dark condition end--------
    //--------------HighLight condition start--------
    if (highLightTile.checkbox == true && remainRoomWallSqft.wall != 0) {
      if ((highLightTile.height && highLightTile.width) != "") {
        if (highLightTile.height > roomOf.height) {
          alert("check dark height");
          return;
        }

        if (highLightTile.numberOfWall > highLightTile.setNumberOfWall) {
          alert("Number of wall should be less than 4 or equal");
          return;
        }

        if (highLightTile.numberOfWall == 1) {
          if (Number(highLightTile.width) <= Number(roomOf.width)) {
            outputState.highLightSqft =
              highLightTile.height * highLightTile.width;
            remainRoomWallSqft.wall =
              remainRoomWallSqft.wall - outputState.highLightSqft;
          } else {
            alert("Dark width should be equal or less than room width");
            return;
          }
        }
        if (highLightTile.numberOfWall == 2) {
          outputState.highLightSqft =
            highLightTile.height * highLightTile.width * 2;
          remainRoomWallSqft.wall =
            remainRoomWallSqft.wall - outputState.highLightSqft;
        }
        if (highLightTile.numberOfWall == 3) {
          outputState.highLightSqft =
            highLightTile.height * highLightTile.width;
          remainRoomWallSqft.wall =
            remainRoomWallSqft.wall - outputState.highLightSqft;
        }

        if (highLightTile.numberOfWall == 4) {
          outputState.highLightSqft = highLightTile.height * lapet;
          remainRoomWallSqft.wall =
            remainRoomWallSqft.wall - outputState.highLightSqft;
        }
      }
    }
    //--------------HighLight condition end--------
    //--------------Light condition start--------
    if (lightTile.checkbox == true && remainRoomWallSqft.wall != 0) {
      if ((lightTile.height && lightTile.width) != "") {
        if (lightTile.height > roomOf.height) {
          alert("check dark height");
          return;
        }

        if (lightTile.numberOfWall > lightTile.setNumberOfWall) {
          alert("Number of wall should be less than 4 or equal");
          return;
        }

        if (lightTile.numberOfWall == 1) {
          if (Number(lightTile.width) <= Number(roomOf.width)) {
            outputState.lightSqft = lightTile.height * lightTile.width;
            remainRoomWallSqft.wall =
              remainRoomWallSqft.wall - outputState.lightSqft;
          } else {
            alert("Dark width should be equal or less than room width");
            return;
          }
        }
        if (lightTile.numberOfWall == 2) {
          outputState.lightSqft = lightTile.height * lightTile.width * 2;
          remainRoomWallSqft.wall =
            remainRoomWallSqft.wall - outputState.lightSqft;
        }
        if (lightTile.numberOfWall == 3) {
          outputState.lightSqft = lightTile.height * lightTile.width;
          remainRoomWallSqft.wall =
            remainRoomWallSqft.wall - outputState.lightSqft;
        }

        if (lightTile.numberOfWall == 4) {
          outputState.lightSqft = lightTile.height * lapet;
          remainRoomWallSqft.wall =
            remainRoomWallSqft.wall - outputState.lightSqft;
        }
      }
    }
    //--------------Light condition end--------
    //-----DHL start when only DHL checked and value is empty-----
    if (
      darkTile.checkbox == true &&
      (darkTile.height && darkTile.width) == ""
    ) {
      outputState.darkSqft = remainRoomWallSqft.wall;
      remainRoomWallSqft.wall = 0;
    }

    if (
      highLightTile.checkbox == true &&
      (highLightTile.height && highLightTile.width) == ""
    ) {
      outputState.highLightSqft = remainRoomWallSqft.wall;
      remainRoomWallSqft.wall = 0;
    }

    if (
      lightTile.checkbox == true &&
      (lightTile.height && lightTile.width) == ""
    ) {
      outputState.lightSqft = remainRoomWallSqft.wall;
      remainRoomWallSqft.wall = 0;
    }
    //-----DHL end when only DHL checked and value is empty-----
    setUpdateCard(true);
    setOutputState((prev) => {
      return {
        lapeta: lapet,
        wallSqrFt: (prev.wallSqrFt = lapet * roomOf.height),
        perTileSqrFt: (prev.perTileSqrFt = (
          (tileInput.tileLenght * tileInput.tileWidth) /
          144
        ).toFixed(2)),
        perBoxSqrFt: (prev.perBoxSqrFt = (
          prev.perTileSqrFt * tileInput.tileInABox
        ).toFixed(2)),
        totalTilesBoxes: (prev.totalTilesBoxes =
          outputState.darkBoxes +
          outputState.highLightBoxes +
          outputState.lightBoxes),
        perTileSqrFtPrice: Math.ceil(
          tileInput.tilePricePerBox / prev.perBoxSqrFt
        ).toFixed(2),
        totalPrice: tileInput.tilePricePerBox * prev.totalTilesBoxes,

        darkSqft: prev.darkSqft,
        darkBoxes: (prev.darkBoxes = Math.ceil(
          prev.darkSqft / prev.perBoxSqrFt
        )),
        highLightSqft: prev.highLightSqft,
        highLightBoxes: (prev.highLightBoxes = Math.ceil(
          prev.highLightSqft / prev.perBoxSqrFt
        )),
        lightSqft: prev.lightSqft,
        lightBoxes: (prev.lightBoxes = Math.ceil(
          prev.lightSqft / prev.perBoxSqrFt
        )),
      };
    });
  };

  return (
    <>
      <div className={classes.lwh}>
        <form onSubmit={DHLSubmitHandler}>
          <table>
            <tbody>
              <tr>
                <td>
                  <label>Enter LWH</label>
                </td>
                <td>
                  <input
                    type="number"
                    value={roomOf.lengths}
                    onChange={lengthHandler}
                    placeholder="length"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={roomOf.width}
                    onChange={widthHandler}
                    placeholder="width"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={roomOf.height}
                    onChange={heightHandler}
                    placeholder="height"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Enter Door Size</label>
                </td>
                <td>
                  <input
                    type="number"
                    value={roomOf.doorSize}
                    onChange={lwhDoorSizeHandler}
                  />
                </td>
              </tr>
            </tbody>
          </table>

          
          <div>
            <DarkTile
              darkTotalBox={outputState.darkBoxes}
              darkSqft={outputState.darkSqft}
              onCheckbox={darkCheckboxHandler}
              onDarkHeightHandler={darkHeightHandler}
              onDarkWidthHandler={darkWidthHandler}
              onDarkNumberOfWallHandler={darkNumberOfWallHandler}
            />
          </div>
          <div>
            <HighlightTile
              TotalBox={outputState.highLightBoxes}
              Sqft={outputState.highLightSqft}
              onCheckbox={highLightCheckboxHandler}
              onHighLightHeightHandler={highLightHeightHandler}
              onHighLightWidthHandler={highLightWidthHandler}
              onHighLightNumberOfWallHandler={highLightNumberOfWallHandler}
            />
          </div>
          <LightTile
            TotalBox={outputState.lightBoxes}
            Sqft={outputState.lightSqft}
            onCheckbox={lightCheckboxHandler}
            onLightHeightHandler={lightHeightHandler}
            onLightWidthHandler={lightWidthHandler}
            onLightNumberOfWallHandler={lightNumberOfWallHandler}
          />
          <Button type="submit" />
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
      {
        <DarkHighLiteCard
          heading={"Highlight"}
          sqrft={outputState.highLightSqft}
          darkBoxes={outputState.highLightBoxes}
        />
      }
      {
        <DarkHighLiteCard
          heading={"Light"}
          sqrft={outputState.lightSqft}
          darkBoxes={outputState.lightBoxes}
        />
      }
    </>
  );
};

export default DarkHighLite;
