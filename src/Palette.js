import React, { Component } from "react";
import ColorBox from "./ColorBox";
import styles from "./styles/PaletteStyles";
import NavBar from "./NavBar";
import { withStyles } from "@material-ui/core/styles";
import PaletteFooter from "./PaletteFooter";

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
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { classes } = this.props;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox
        showAll={true}
        showLink={true}
        paletteId={id}
        id={color.id}
        key={color.id}
        background={color[format]}
        name={color.name}
        moreUrl={`/color-palette-app/palette/${id}/${color.id}`}
      />
    ));
    return (
      <div className={classes.Palette}>
        <NavBar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
          showAll
        ></NavBar>
        <div className={classes.colors}>{colorBoxes}</div>
        {/* <footer className="Palette-footer">
          {paletteName}
          <span className="emoji">{emoji}</span>
        </footer> */}
        <PaletteFooter name={paletteName} emoji={emoji}></PaletteFooter>
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
