import React, { Component } from "react";
import seedColors from "./seedColors";
import "./App.css";
import Palette from "./Palette";
import { generatePalette } from "./colorHelpers";
import { Route, Switch } from "react-router-dom";

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
            render={() => <h1>PaletteList Goes Here</h1>}
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
        {/* generatePalette(seedColors[{findPalette()}]*/}
      </div>
    );
  }
}

export default App;
