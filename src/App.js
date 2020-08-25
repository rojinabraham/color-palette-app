import React, { Component } from "react";
import seedColors from "./seedColors";
import "./App.css";
import Palette from "./Palette";
import { generatePalette } from "./colorHelpers";
import { Route, Switch } from "react-router-dom";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";

class App extends Component {
  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    this.state = { palettes: savedPalettes || seedColors };
  }
  findPalette = (id) => {
    return this.state.palettes.find(function (palette) {
      return palette.id === id;
    });
  };
  savePalette = (newPalette) => {
    this.setState(
      { palettes: [...this.state.palettes, newPalette] },
      this.syncLocalStorage
    );
  };
  syncLocalStorage = () => {
    window.localStorage.setItem(
      "palettes",
      JSON.stringify(this.state.palettes)
    );
  };
  deletePalette = (id) => {
    this.setState(
      (st) => ({
        palettes: st.palettes.filter((palette) => palette.id !== id),
      }),
      this.syncLocalStorage
    );
  };
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/color-palette-app/palette/new"
            render={(routeProps) => (
              <NewPaletteForm
                palettes={this.state.palettes}
                handleSavePalette={this.savePalette}
                {...routeProps}
              ></NewPaletteForm>
            )}
          ></Route>
          <Route
            exact
            path="/color-palette-app/"
            render={(routeProps) => (
              <PaletteList
                {...routeProps}
                palettes={this.state.palettes}
                deletePalette={this.deletePalette}
              />
            )}
          ></Route>
          <Route
            exact
            path="/color-palette-app/palette/:id"
            render={(routeProps) => (
              <Palette
                palette={generatePalette(
                  this.findPalette(routeProps.match.params.id)
                )}
              ></Palette>
            )}
          ></Route>
          <Route
            exact
            path="/color-palette-app/palette/:paletteId/:colorId"
            render={(routeProps) => (
              <SingleColorPalette
                colorId={routeProps.match.params.colorId}
                palette={generatePalette(
                  this.findPalette(routeProps.match.params.paletteId)
                )}
              ></SingleColorPalette>
            )}
          ></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
