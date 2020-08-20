import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import Select from "@material-ui/core/Select";
import { MenuItem } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import styles from "./styles/NavBarStyles";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex", open: false };
    this.handleFormatChange = this.handleFormatChange.bind(this);
  }
  handleFormatChange(e) {
    //alert(e.target.value);
    this.setState({ format: e.target.value, open: true }, () =>
      this.props.handleChange(this.state.format)
    );
  }
  closeSnackbar = () => {
    this.setState({ open: false });
  };
  render() {
    const { level, changeLevel, showAll, classes } = this.props;
    const { format } = this.state;
    console.log(classes.selectContainer);
    return (
      <header className={classes.NavBar}>
        <div className={classes.logo}>
          <Link to="/color-palette-app/">ReactColorPicker</Link>
        </div>
        {showAll && (
          <div>
            <span>Level: {level}</span>
            <div className={classes.slider}>
              <Slider
                defaultValue={level}
                min={100}
                max={900}
                step={100}
                onAfterChange={changeLevel}
              />
            </div>
          </div>
        )}

        <div className={classes.selectContainer}>
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value="hex">HEX - #FFFFFF</MenuItem>
            <MenuItem value="rgb">RGB - rgba(255, 255, 255) </MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
          </Select>
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            open={this.state.open}
            autoHideDuration={3000}
            message={
              <span id="message-id">
                Format Changed to {format.toUpperCase()}
              </span>
            }
            ContentProps={{
              "aria-decribedby": "message-id",
            }}
            onClose={this.closeSnackbar}
            action={[
              <IconButton
                onClick={this.closeSnackbar}
                color="inherit"
                key="close"
                aria-label="close"
              >
                <CloseIcon></CloseIcon>
              </IconButton>,
            ]}
          ></Snackbar>
        </div>
      </header>
    );
  }
}

export default withStyles(styles)(NavBar);
