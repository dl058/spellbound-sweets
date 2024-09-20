import { Layer } from "../models/Layer";
import "./LayerBuilder.css";
import React from "react";

interface Props {
  layer: Layer;
  index: number;
  deleteLayer: (index: number) => void;
}

const LayerBuilder = ({ layer, index, deleteLayer }: Props) => {
  // const { height, width, color = layer };
  return (
    <div className="LayerBuilder">
      <p>
        Layer {index + 1}: Height = {layer.height}, Width - {layer.width},
        Flavor = {layer.flavor}
      </p>
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
