import React, { Component } from "react";
import classNames from "classnames";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { Button, Link } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PaletteMetaForm from "./PaletteMetaForm";
import styles from "./styles/PaletteFormNavStyles";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
class PaletteFormNav extends Component {
  constructor(props) {
    super(props);
    this.state = { newPaletteName: "", formShowing: false };
  }

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  showForm = () => {
    this.setState({ formShowing: true });
  };
  hideForm = () => {
    this.setState({ formShowing: false });
  };
  render() {
    const {
      classes,
      open,
      palettes,
      handleSubmit,
      handleDrawerOpen,
    } = this.props;
    const { formShowing } = this.state;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          color="default"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
              className={classNames(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <ChevronRightIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Create Palette
            </Typography>
          </Toolbar>
          <div className={classes.navBtns}>
            <Link to="/color-palette-app/">
              <Button
                className={classes.button}
                variant="contained"
                color="secondary"
              >
                Go Back
              </Button>
            </Link>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={this.showForm}
            >
              Save!
            </Button>
            {formShowing && (
              <PaletteMetaForm
                palettes={palettes}
                handleSubmit={handleSubmit}
                hideForm={this.hideForm}
              ></PaletteMetaForm>
            )}
          </div>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);
