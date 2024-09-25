import { useState } from "react";
import "./LayerAdd.css";
import LayerForm from "./LayerForm";
import { Layer } from "../models/Layer";

interface Props {
  onAddLayer: (newLayer: Layer) => void;
}

const LayerAdd = ({ onAddLayer }: Props) => {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="LayerAdd">
      {showForm ? (
        <LayerForm onAddLayer={onAddLayer} />
      ) : (
        <button className="add-layer" onClick={() => setShowForm(true)}>
          Add a Layer
        </button>
      )}
    </div>
  );
};

export default LayerAdd;
