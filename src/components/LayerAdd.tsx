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
        <LayerForm
          onAddLayer={onAddLayer}
          closeForm={() => setShowForm(false)}
        />
      ) : (
        <button onClick={() => setShowForm(true)}>Add Layer</button>
      )}
    </div>
  );
};

export default LayerAdd;
