import { FormEvent, useState } from "react";
import { Layer } from "../models/Layer";
import "./LayerForm.css";
import { px } from "framer-motion";

interface Props {
  onAddLayer: (layer: Layer) => void;
  layerCount: number;
}

const LayerForm = ({ onAddLayer, layerCount }: Props) => {
  const [flavor, setFlavor] = useState("moonlight-vanilla");

  const fixedHeight = 53;
  const fixedWidth = 180;
  const maxLayers = 4;

  const isMaxReached = layerCount >= maxLayers;

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (isMaxReached) return;

    const newLayer: Layer = {
      flavor,
      height: fixedHeight,
      width: fixedWidth,
    };

    onAddLayer(newLayer);
    setFlavor("moonlight-vanilla");
  };

  const cakeStyles = {
    backgroundColor: getFlavorColor(flavor),
    height: `${fixedHeight}px`,
    width: `${fixedWidth}px`,
    borderRadius: "10px",
    border: "1px solid black",
    margin: "20px auto",
  };

  return (
    <form className="LayerForm" onSubmit={submitHandler}>
      <label htmlFor="flavor">Flavor:</label>
      <select
        name="flavor"
        id="flavor"
        value={flavor}
        onChange={(e) => setFlavor(e.target.value)}
        disabled={isMaxReached}
      >
        <option value="moonlight-vanilla">Moonlight Vanilla</option>
        <option value="chocolate-dragon-fire">Chocolate Dragon Fire</option>
        <option value="stardust-strawberry">Stardust Strawberry</option>
        <option value="fairy-berry">Fairy Berry</option>
      </select>

      {!isMaxReached ? (
        <>
          <button className="saveBtn">Add Layer</button>
        </>
      ) : (
        <p className="limit-msg">🍰 Max 4 layers reached!</p>
      )}
    </form>
  );
};

const getFlavorColor = (flavor: string) => {
  switch (flavor) {
    case "moonlight-vanilla":
      return "#f3e5ab";
    case "chocolate-dragon-fire":
      return "#8b4513";
    case "stardust-strawberry":
      return "#ff6384";
    case "fairy-berry":
      return "#8e44ad";
    default:
      return "#ffffff";
  }
};

export default LayerForm;
