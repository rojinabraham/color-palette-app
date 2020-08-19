import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./NavBar.css";
import Select from "@material-ui/core/Select";
import { MenuItem } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";

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
    const { level, changeLevel } = this.props;
    const { format } = this.state;
    return (
      <header className="NavBar">
        <div className="logo">
          <Link to="/">ReactColorPicker</Link>
        </div>
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
        <div className="select-container">
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

export default NavBar;
