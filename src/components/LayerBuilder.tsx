import { Layer } from "../models/Layer";
import "./LayerBuilder.css";
import React from "react";

interface Props {
  layer: Layer;
  index: number;
  deleteLayer: (index: number) => void;
}

const LayerBuilder = ({ layer, index, deleteLayer }: Props) => {
  return (
    <div className="LayerBuilder">
      <button
        onClick={() => {
          deleteLayer(index);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default LayerBuilder;
