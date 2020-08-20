import React, { Component } from "react";
import ColorBox from "./ColorBox";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.gatherShades = this.gatherShades.bind(this);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
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
  render() {
    const colorBoxes = this._shades.map((color) => (
      <ColorBox
        showLink={false}
        key={color.id}
        name={color.name}
        background={color.hex}
      ></ColorBox>
    ));
    console.log(this._shades);
    return (
      <div className="Palette">
        <h1>Single Colors</h1>
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}

export default SingleColorPalette;
