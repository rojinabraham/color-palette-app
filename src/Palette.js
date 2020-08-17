import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
class Palette extends Component {
  render() {
    const colorBoxes = this.props.colors.map((color) => (
      <ColorBox background={color.color} name={color.name} />
    ));
    //console.log(this.props.colors);

    return (
      <div className="Palette">
        <div className="Palette-colors">{colorBoxes}</div>
        {/* {footer here} */}
      </div>
    );
  }
}

export default Palette;
