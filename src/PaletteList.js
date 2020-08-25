import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/PaletteListStyles";
class PaletteList extends Component {
  goToPalette(id) {
    this.props.history.push(`/color-palette-app/palette/${id}`);
  }
  render() {
    const { palettes, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
            <Link to="/color-palette-app/palette/new">Create Palette</Link>
          </nav>
          <div className={classes.palettes}>
            {palettes.map((palette) => (
              <MiniPalette
                key={palette.id}
                id={palette.id}
                handleDelete={this.props.deletePalette}
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

export default withStyles(styles)(PaletteList);
