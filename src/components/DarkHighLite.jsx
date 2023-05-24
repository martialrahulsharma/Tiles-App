import React, { useState } from "react";
import Card from "./Card";
import TilesRelatedInput from "./TilesRelatedInput";
import DarkHighLiteCard from "./DarkHighLiteCard";
import classes from "./DarkHighLite.module.css";

let LWHComponentTiles;
let wallDropdownArrayData = [];

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
  const [wallSelect, setWallSelect] = useState("");
  const [dark, setDark] = useState({
    height: "",
    width: "",
    tileAxis: "Horizontal",
    wallNo: "",
    numberOfWall: 1,
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

  const darkInputHeightHandler = (event) => {
    setDark((prev) => {
      return { ...prev, height: (dark.height = event.target.value) };
    });
  };

  const darkInputWidthHandler = (event) => {
    setDark((prev) => {
      return { ...prev, width: (dark.width = event.target.value) };
    });
  };
  const darkTileAxishHandler = (event) => {
    setDark((prev) => {
      return { ...prev, tileAxis: (dark.tileAxis = event.target.value) };
    });
  };
  const darkWallNumberHandler = (event) => {
    setDark((prev) => {
      return { ...prev, wallNo: (dark.wallNo = event.target.value) };
    });
  };
  const darkNumberOfWallHandler = (event) => {
    setDark((prev) => {
      return { ...prev, numberOfWall: (dark.numberOfWall = event.target.value) };
    });
  };

  const putDataInWallSelectHandler = (arr) => {
    if (roomOf.width && roomOf.lengths) {
      wallDropdownArrayData = [
        roomOf.width,
        roomOf.lengths,
        roomOf.lengths + " & " + roomOf.width,
        roomOf.width + " Both",
        roomOf.lengths + " Both",
      ];
      setDark((prev) => {
        return { ...prev, wallNo: (dark.wallNo = wallDropdownArrayData[0]) };
      });
    }
  };

  const LWHSubmitHandler = (event) => {
    // console.log(wallDropdownArrayData);
    console.log(dark);
    event.preventDefault();
    // console.log("LWHSubmitHandler");
    setUpdateCard(true);
    // console.log(tileInput.tileLenght);

    event.preventDefault();
    if(dark.height > roomOf.height){
      alert('check dark height');
      return;
    }
    if(dark.width > roomOf.width){
      alert('check dark width');
      return;
    }
    let drksqft = dark.height*dark.width
    let lapet = roomOf.lengths * 2 + roomOf.width * 2 - roomOf.doorSize;
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
      };
    });
  };

  return (
    <>
      <div className={classes.lwh}>
        <form onSubmit={LWHSubmitHandler}>
          <label>
            Enter Length, Width, Height
            <input
              type="number"
              value={roomOf.lengths}
              onChange={lengthHandler}
              placeholder="length"
              onBlur={putDataInWallSelectHandler}
            />
            <input
              type="number"
              value={roomOf.width}
              onChange={widthHandler}
              placeholder="width"
              onBlur={putDataInWallSelectHandler}
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
          <div>

          <label>Dark</label>
          <input
            type="number"
            value={dark.height}
            onChange={darkInputHeightHandler}
            placeholder="Height"
          />
          <input
            type="number"
            value={dark.width}
            onChange={darkInputWidthHandler}
            placeholder="width"
          />
          <select
            name="hrVr"
            value={dark.tileAxis}
            onChange={darkTileAxishHandler}
          >
            <option value="Horizontal">Horizontal</option>
            <option value="Vertical">Vertical</option>
          </select>

          <input type='number' value={dark.numberOfWall } placeholder='number of wall' onChange={darkNumberOfWallHandler} />

          <select
            name="wall"
            value={dark.wallNo}
            onChange={darkWallNumberHandler}
          >
            <option>Select Wall</option>
            {wallDropdownArrayData.map((item, index) => {
              return <option key={index}>{item}</option>;
            })}
          </select>
          </div>
          {/* highLighter start */}
          <div>

          <label>High Lighter</label>
          <input
            type="number"
            value={dark.height}
            onChange={darkInputHeightHandler}
            placeholder="Height"
          />
          <input
            type="number"
            value={dark.width}
            onChange={darkInputWidthHandler}
            placeholder="width"
          />
          <select
            name="hrVr"
            value={dark.tileAxis}
            onChange={darkTileAxishHandler}
          >
            <option value="Horizontal">Horizontal</option>
            <option value="Vertical">Vertical</option>
          </select>

          <input type='number' value={dark.numberOfWall } placeholder='number of wall' onChange={darkNumberOfWallHandler} />

          <select
            name="wall"
            value={dark.wallNo}
            onChange={darkWallNumberHandler}
          >
            <option>Select Wall</option>
            {wallDropdownArrayData.map((item, index) => {
              return <option key={index}>{item}</option>;
            })}
          </select>
          </div>
          {/* lighter start */}
          <div>

          <label>Lighter</label>
          <input
            type="number"
            value={dark.height}
            onChange={darkInputHeightHandler}
            placeholder="Height"
          />
          <input
            type="number"
            value={dark.width}
            onChange={darkInputWidthHandler}
            placeholder="width"
          />
          <select
            name="hrVr"
            value={dark.tileAxis}
            onChange={darkTileAxishHandler}
          >
            <option value="Horizontal">Horizontal</option>
            <option value="Vertical">Vertical</option>
          </select>

          <input type='number' value={dark.numberOfWall } placeholder='number of wall' onChange={darkNumberOfWallHandler} />

          <select
            name="wall"
            value={dark.wallNo}
            onChange={darkWallNumberHandler}
          >
            <option>Select Wall</option>
            {wallDropdownArrayData.map((item, index) => {
              return <option key={index}>{item}</option>;
            })}
          </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      {updateCard && (
        <Card
          OutputHeading="LWH Output"
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
      )
      }
      { <DarkHighLiteCard heading={'Dark'} sqrft={'152'} boxes={'20'}/>}
      { <DarkHighLiteCard heading={'Highlight'} sqrft={'152'} boxes={'20'}/>}
      { <DarkHighLiteCard heading={'Light'} sqrft={'152'} boxes={'20'}/>}
    </>
  );
};

export default DarkHighLite;
