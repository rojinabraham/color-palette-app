import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import DraggableColorBox from "./DraggableColorBox";
function DraggableColorList({ colors, deleteColor }) {
  return (
    <div style={{ height: "100%" }}>
      {colors.map((color, i) => (
        <DraggableColorBox
          handleClick={() => deleteColor(color.name)}
          color={color.color}
          name={color.name}
          key={color.name}
          index={i}
        ></DraggableColorBox>
      ))}
    </div>
  );
}
export default SortableContainer(DraggableColorList);
// const DraggableColorList = SortableContainer(({ colors, deleteColor }) => {
//   return (
//     <div style={{ height: "100%" }}>
//       {colors.map((color, i) => (
//         <DraggableColorBox
//           handleClick={() => deleteColor(color.name)}
//           color={color.color}
//           name={color.name}
//           key={color.name}
//           index={i}
//         ></DraggableColorBox>
//       ))}
//     </div>
//   );
// });
// export default DraggableColorList;
