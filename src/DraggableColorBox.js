import React from "react";
import { withStyles } from "@material-ui/core";
const styles = {
  root: {
    height: "25%",
    width: "20%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-5px",
  },
};
function DraggableColorBox(props) {
  console.log(props);
  return (
    <div
      className={props.classes.root}
      style={{ backgroundColor: props.color }}
    >
      {props.color}
    </div>
  );
}
export default withStyles(styles)(DraggableColorBox);
