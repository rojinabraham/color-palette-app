import React, { Component } from "react";
import ColorBox from "./ColorBox";
import NavBar from "./NavBar";
import PaletteFooter from "./PaletteFooter";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/PaletteStyles";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.gatherShades = this.gatherShades.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = { format: "hex" };
  }
  gatherShades(palette, colorToFilter) {
    let shades = [];
    let allColors = palette.colors;
    for (let key in allColors) {
      shades = shades
        .concat(allColors[key])
        .filter((color) => color.id === colorToFilter);
    }
    return shades.slice(1);
  }
  changeFormat(val) {
    // console.log(val);
    this.setState({ format: val });
  }
  render() {
    const { paletteName, emoji, id } = this.props.palette;
    const { classes } = this.props;
    const colorBoxes = this._shades.map((color) => (
      <ColorBox
        showLink={false}
        key={color.name}
        name={color.name}
        background={color[this.state.format]}
      ></ColorBox>
    ));
    console.log(this.props);
    return (
      <div className={classes.Palette}>
        <NavBar showAll={false} handleChange={this.changeFormat}></NavBar>
        <div className={classes.colors}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Link to={`/color-palette-app/palette/${id}`}>Go Back</Link>
          </div>
        </div>
        <PaletteFooter name={paletteName} emoji={emoji}></PaletteFooter>
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);
