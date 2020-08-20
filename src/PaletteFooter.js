import React from "react";
function PaletteFooter(props) {
  console.log(props);
  return (
    <footer className="Palette-footer">
      {props.name}
      <span className="emoji">{props.emoji}</span>
    </footer>
  );
}
export default PaletteFooter;
