import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import Page from "./Page";
import NewPaletteForm from "./NewPaletteForm";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

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
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} classNames="page" timeout={500}>
                <Switch location={location}>
                  <Route
                    exact
                    path="/color-palette-app/palette/new"
                    render={(routeProps) => (
                      <Page>
                        <NewPaletteForm
                          palettes={this.state.palettes}
                          handleSavePalette={this.savePalette}
                          {...routeProps}
                        ></NewPaletteForm>
                      </Page>
                    )}
                  ></Route>
                  <Route
                    exact
                    path="/color-palette-app/"
                    render={(routeProps) => (
                      <Page>
                        <PaletteList
                          {...routeProps}
                          palettes={this.state.palettes}
                          deletePalette={this.deletePalette}
                        />
                      </Page>
                    )}
                  ></Route>
                  <Route
                    exact
                    path="/color-palette-app/palette/:id"
                    render={(routeProps) => (
                      <Page>
                        <Palette
                          palette={generatePalette(
                            this.findPalette(routeProps.match.params.id)
                          )}
                        ></Palette>
                      </Page>
                    )}
                  ></Route>
                  <Route
                    exact
                    path="/color-palette-app/palette/:paletteId/:colorId"
                    render={(routeProps) => (
                      <Page>
                        <SingleColorPalette
                          colorId={routeProps.match.params.colorId}
                          palette={generatePalette(
                            this.findPalette(routeProps.match.params.paletteId)
                          )}
                        ></SingleColorPalette>
                      </Page>
                    )}
                  ></Route>
                  <Route
                    render={(routeProps) => (
                      <Page>
                        <PaletteList
                          {...routeProps}
                          palettes={this.state.palettes}
                          deletePalette={this.deletePalette}
                        />
                      </Page>
                    )}
                  ></Route>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        ></Route>
        <Route></Route>
      </div>
    );
  }
}

export default App;
