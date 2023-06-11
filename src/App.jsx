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
    length: "",
    width: "",
    height: "",
    doorSize: "",
    tileLength: "",
    tileWidth: "",
    tileInABox: "",
    tilePricePerBox: "",
  })
);
sessionStorage.setItem(
  "SqrFtComponent",
  JSON.stringify({
    sqrft: "",
    tileLength: "",
    tileWidth: "",
    tileInABox: "",
    tilePricePerBox: "",
  })
);
sessionStorage.setItem(
  "LWComponent",
  JSON.stringify({
    length: "",
    width: "",
    tileLength: "",
    tileWidth: "",
    tileInABox: "",
    tilePricePerBox: "",
  })
);
sessionStorage.setItem(
  "DHLComponent",
  JSON.stringify({
    length: "",
    width: "",
    height: "",
    doorSize: "",
    tileLength: "",
    tileWidth: "",
    tileInABox: "",
    tilePricePerBox: "",
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
