import React, { useState } from "react";
import ShowTilesDetails from "./components/ShowTilesDetails";
import Card from "./components/Card";
import CostmerSizeSelector from "./components/CostmerSizeSelector";
import Lapeta from "./components/Lapeta";
import LengthWidthHeight from "./components/LengthWidthHeight";
import SquareFeet from "./components/SquareFeet";
import LengthWidth from "./components/LengthWidth";
import "../src/App.css";

sessionStorage.setItem('LapetaComponent', JSON.stringify({'lapeta': 0, 'height': 0, 'doorSize': 0, 'tileLength': 0, 'tileWidth': 0, 'tileInABox': 0, 'tilePricePerBox': 0}));
let costmerSizeProvided = ['Lapeta', 'LWH', 'Sqr Ft', 'LW'];

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
