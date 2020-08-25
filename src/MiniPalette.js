import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/MiniPaletteStyles";
import DeleteIcon from "@material-ui/icons/Delete";
function MiniPalette(props) {
  const { classes, paletteName, emoji, colors } = props;
  const miniColorBoxes = colors.map((color) => (
    <div
      className={classes.miniColor}
      key={color.name}
      style={{ background: color.color }}
    ></div>
  ));

  return (
    <div className={classes.root} onClick={props.handleClick}>
      <div className={classes.delete}>
        <DeleteIcon
          className={classes.deleteIcon}
          style={{ transition: "all 0.3s ease-in-out" }}
        ></DeleteIcon>
      </div>
      <div className={classes.colors}>{miniColorBoxes} </div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}
export default withStyles(styles)(MiniPalette);
