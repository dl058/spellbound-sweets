import { useState } from "react";
import "./LayerAdd.css";
import LayerForm from "./LayerForm";
import { Layer } from "../models/Layer";
import { motion } from "framer-motion";

interface Props {
  onAddLayer: (newLayer: Layer) => void;
}

const LayerAdd = ({ onAddLayer }: Props) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="LayerAdd">
      {showForm ? (
        <motion.div
          className="fire-effect"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <LayerForm onAddLayer={onAddLayer} />
        </motion.div>
      ) : (
        <button className="add-layer" onClick={() => setShowForm(true)}>
          Add a Layer
        </button>
      )}
    </div>
  );
};

export default LayerAdd;
