import React, { Component } from "react";
import ColorBox from "./ColorBox";

import "./Palette.css";
import NavBar from "./NavBar";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: "hex" };
    this.changeFormat = this.changeFormat.bind(this);
  }
  changeLevel = (level) => {
    this.setState({ level });
  };
  changeFormat(val) {
    // console.log(val);
    this.setState({ format: val });
  }
  render() {
    const { colors } = this.props.palette;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox background={color[format]} name={color.name} />
    ));
    return (
      <div className="Palette">
        <NavBar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
        ></NavBar>
        <div className="Palette-colors">{colorBoxes}</div>
        {/* {footer here} */}
      </div>
    );
  }
}

export default Palette;
