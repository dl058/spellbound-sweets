import { FormEvent, useState } from "react";
import { Layer } from "../models/Layer";
import "./LayerForm.css";

interface Props {
  onAddLayer: (layer: Layer) => void;
  closeForm: () => void;
}

const LayerForm = ({ onAddLayer, closeForm }: Props) => {
  const [flavor, setFlavor] = useState("moonlight-vanilla");
  const [design, setDesign] = useState("rainbow-isles");
  const [height, setHeight] = useState("");
  const [width, setwidth] = useState("");

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    const newLayer: Layer = {
      flavor: flavor,
      design: design,
      height: +height,
      width: +width,
    };
    console.log(newLayer);
    onAddLayer(newLayer);
    setFlavor("moonlight-vanilla");
    setDesign("rainbow-isles");
    setHeight("");
    setwidth("");
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
        <option value="magical-marshmallow">Magical Marshmallow</option>
        <option value="fairy-berry">Fairy Berry</option>
      </select>

      <label htmlFor="design">Design:</label>
      <select
        name="design"
        id="design"
        value={design}
        onChange={(e) => setDesign(e.target.value)}
      >
        <option value="rainbow-isles">Rainbow Isles</option>
        <option value="crystal-cave">Crystal Cave</option>
        <option value="cloud-kingdom">Cloud Kingdom</option>
        <option value="starry-night">Starry Night</option>
      </select>

      <label htmlFor="height">Height:</label>
      <input
        type="number"
        name="height"
        id="height"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        placeholder="Add height here"
      />
      <label htmlFor="width">Width:</label>
      <input
        type="number"
        name="width"
        id="width"
        value={width}
        onChange={(e) => setwidth(e.target.value)}
      />
      <button>Save</button>
    </form>
  );
};

export default LayerForm;
