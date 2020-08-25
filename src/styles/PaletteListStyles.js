import sizes from "./sizes";
import bg from "./bg.svg";
export default {
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#330033",
    backgroundImage: `url(${bg})`,
    overflow: "auto",
  },
  heading: {
    forntSize: "2rem",
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("xl")]: {
      width: "80%",
    },
    [sizes.down("xs")]: {
      width: "70%",
    },
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "white",
    alignItems: "center",
    "& a": {
      cursor: "pointer",
      color: "white",
    },
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3,30%)",
    gridGap: "5%",
    [sizes.down("sm")]: {
      gridTemplateColumns: "repeat(2,50%)",
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1,100%)",
    },
  },
};
