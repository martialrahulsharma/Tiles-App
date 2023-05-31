import React from "react";
import CostmerSizeSelector from "./components/CostmerSizeSelector";
import "../src/App.css";

sessionStorage.setItem(
  "LapetaComponent",
  JSON.stringify({
    lapeta: "",
    height: "",
    doorSize: "",
    tileLength: "",
    tileWidth: "",
    tileInABox: "",
    tilePricePerBox: "",
  })
);

sessionStorage.setItem(
  "LWHComponent",
  JSON.stringify({
    length: 0,
    width: 0,
    height: 0,
    doorSize: 0,
    tileLength: 0,
    tileWidth: 0,
    tileInABox: 0,
    tilePricePerBox: 0,
  })
);
sessionStorage.setItem(
  "SqrFtComponent",
  JSON.stringify({
    sqrft: 0,
    tileLength: 0,
    tileWidth: 0,
    tileInABox: 0,
    tilePricePerBox: 0,
  })
);
sessionStorage.setItem(
  "LWComponent",
  JSON.stringify({
    length: 0,
    width: 0,
    tileLength: 0,
    tileWidth: 0,
    tileInABox: 0,
    tilePricePerBox: 0,
  })
);
sessionStorage.setItem(
  "DHLComponent",
  JSON.stringify({
    length: 0,
    width: 0,
    height: 0,
    tileLength: 0,
    tileWidth: 0,
    tileInABox: 0,
    tilePricePerBox: 0,
  })
);
let costmerSizeProvided = ["Lapeta", "LWH", "Sqr Ft", "LW", "DHL"];

function App() {
  return (
    <>
      <div className="container">
        <CostmerSizeSelector sizeProvided={costmerSizeProvided} />
      </div>
    </>
  );
}

export default App;
