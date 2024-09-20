import { FormEvent, useState } from "react";
import { Layer } from "../models/Layer";
import "./LayerForm.css";

interface Props {
  onAddLayer: (layer: Layer) => void;
  closeForm: () => void;
}

const LayerForm = ({ onAddLayer, closeForm }: Props) => {
  const [flavor, setFlavor] = useState("");
  const [design, setDesign] = useState("");
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
    onAddLayer(newLayer);
    setFlavor("");
    setDesign("");
    setHeight("");
    setwidth("");
  };

  return (
    <form className="LayerForm" onSubmit={submitHandler}>
      <label htmlFor="flavor"> Flavor: </label>
      <input
        type="text"
        name="flavor"
        id="flavor"
        value={flavor}
        onChange={(e) => setFlavor(e.target.value)}
        placeholder="Add flavor here"
        required
      />
      <label htmlFor="design">Design:</label>
      <input
        type="text"
        name="design"
        id="design"
        value={design}
        onChange={(e) => setDesign(e.target.value)}
        placeholder="Add design here"
      />

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
    </form>
  );
};

export default LayerForm;
