import boxesData from "./boxesData";
import { useState } from "react";
import Box from "./Box";
const Boxes = props => {
  const [boxes, setBoxes] = useState(boxesData);

  const toggle = id => {
    setBoxes(prevBoxes => prevBoxes.map(box => (box.id === id ? { ...box, on: !box.on } : box)));
    /**
     * Challenge: use setSquares to update the
     * correct square in the array.
     *
     * Make sure not to directly modify state!
     *
     * Hint: look back at the lesson on updating arrays
     * in state if you need a reminder on how to do this
     */
  };

  return (
    <div>
      {boxes.map(box => {
        return <Box id={box.id} key={box.id} on={box.on} toggle={toggle} />;
      })}
    </div>
  );
};

export default Boxes;
