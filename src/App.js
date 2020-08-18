import React, { Component } from "react";
import seedColors from "./seedColors";
import "./App.css";
import Palette from "./Palette";
import { generatePalette } from "./colorHelpers";

class App extends Component {
  render() {
    return (
      <div>
        <Palette palette={generatePalette(seedColors[4])}></Palette>
      </div>
    );
  }
}

export default App;
