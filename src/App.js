import React, { Component } from "react";
import seedColors from "./seedColors";
import "./App.css";
import Palette from "./Palette";
import { generatePalette } from "./colorHelpers";
import { Route, Switch } from "react-router-dom";
import PaletteList from "./PaletteList";

class App extends Component {
  findPalette = (id) => {
    return seedColors.find(function (palette) {
      return palette.id === id;
    });
  };
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={(routeProps) => (
              <PaletteList {...routeProps} palettes={seedColors}></PaletteList>
            )}
          ></Route>
          <Route
            exact
            path="/palette/:id"
            render={(routeProps) => (
              <Palette
                palette={generatePalette(
                  this.findPalette(routeProps.match.params.id)
                )}
              ></Palette>
            )}
          ></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
