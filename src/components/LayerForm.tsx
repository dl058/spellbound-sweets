import { FormEvent, useState } from "react";
import { Layer } from "../models/Layer";
import "./LayerForm.css";

interface Props {
  onAddLayer: (layer: Layer) => void;
}

const LayerForm = ({ onAddLayer }: Props) => {
  const [flavor, setFlavor] = useState("moonlight-vanilla");
  // const [design, setDesign] = useState("rainbow-isles");
  const [height, setHeight] = useState(50);
  const [width, setWidth] = useState(50);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    const newLayer: Layer = {
      flavor: flavor,
      // design: design,
      height: +height,
      width: +width,
    };
    console.log(newLayer);
    onAddLayer(newLayer);
    setFlavor("moonlight-vanilla");
    // setDesign("rainbow-isles");
    setHeight(50);
    setWidth(50);
  };

  const cakeStyles = {
    backgroundColor: getFlavorColor(flavor),
    height: `${height}px`,
    width: `${width}px`,
    borderRadius: "10px",
    border: "1px solid black",
    margin: "20px auto",
  };

  return (
    <form className="LayerForm" onSubmit={submitHandler}>
      <label htmlFor="flavor"> Flavor: </label>
      <select
        name="flavor"
        id="flavor"
        value={flavor}
        onChange={(e) => setFlavor(e.target.value)}
        required
      >
        <option value="moonlight-vanilla">Moonlight Vanilla</option>
        <option value="chocolate-dragon-fire">Chocolate Dragon Fire</option>
        <option value="stardust-strawberry">Stardust Strawberry</option>

        <option value="fairy-berry">Fairy Berry</option>
      </select>

      {/* <label htmlFor="design">Design:</label> */}
      {/* <select
        name="design"
        id="design"
        value={design}
        onChange={(e) => setDesign(e.target.value)}
      > */}
      {/* <option value="rainbow-isles">Rainbow Isles</option>
        <option value="crystal-cave">Crystal Cave</option>
        <option value="cloud-kingdom">Cloud Kingdom</option>
        <option value="starry-night">Starry Night</option>
      </select> */}

      <label htmlFor="height">Height:</label>
      <input
        max={200}
        min={50}
        type="range"
        name="height"
        id="height"
        value={height}
        onChange={(e) => setHeight(Number(e.target.value))}
        required
      />
      <label htmlFor="width">Width:</label>
      <input
        type="range"
        name="width"
        id="width"
        min={50}
        max={230}
        value={width}
        onChange={(e) => setWidth(Number(e.target.value))}
        required
      />
      <div style={cakeStyles} className="cake-render">
        cake size!
      </div>
      <button className="saveBtn">Save</button>
    </form>
  );
};
const getFlavorColor = (flavor: string) => {
  switch (flavor) {
    case "moonlight-vanilla":
      return "#f3e5ab"; // Vanilla color
    case "chocolate-dragon-fire":
      return "#8b4513"; // Chocolate color
    case "stardust-strawberry":
      return "#ff6384"; // Strawberry pink
    case "fairy-berry":
      return "#8e44ad"; // Berry purple
    default:
      return "#ffffff"; // Default to white
  }
};

export default LayerForm;
