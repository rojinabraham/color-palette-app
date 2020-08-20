import React, { Component } from "react";
// import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteListStyles";
class PaletteList extends Component {
  goToPalette(id) {
    this.props.history.push(`/color-palette-app/palette/${id}`);
  }
  render() {
    const { palettes, classes } = this.props;
    ///console.log(palettes);
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
          </nav>
          <div className={classes.palettes}>
            {palettes.map((palette) => (
              <MiniPalette
                {...palette}
                handleClick={() => this.goToPalette(palette.id)}
              ></MiniPalette>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
/* <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link> */

export default withStyles(styles)(PaletteList);
