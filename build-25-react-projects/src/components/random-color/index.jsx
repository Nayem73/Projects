import { useState } from "react";

const RandomColor = () => {
  const [color, setColor] = useState({
    colorType: "hex",
    color: "#f15025",
  });
  const setTypeOfColor = (type) => {
    if (type === "hex") {
      const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
      let hexColor = "#";
      for (let i = 0; i < 6; i++) {
        const random = Math.floor(Math.random() * hex.length);
        hexColor += hex[random];
      }
      setColor({ colorType: "hex", color: hexColor });
    } else if (type === "rgb") {
      let rgbColor = `rgb(
      ${Math.floor(Math.random() * 256)}
      ,${Math.floor(Math.random() * 256)}
      ,${Math.floor(Math.random() * 256)}
      )`;
      setColor({ colorType: "rgb", color: rgbColor });
    }
  };

  return (
    <>
      <div
        style={{
          backgroundColor: color.color,
          height: "100vh",
          width: "100vw",
        }}
      >
        <button onClick={() => setTypeOfColor("hex")}> Create Hex Color</button>
        <button onClick={() => setTypeOfColor("rgb")}> Create rgb Color</button>
        <h1>
          {color.colorType} color: {color.color}
        </h1>
      </div>
    </>
  );
};

export default RandomColor;
