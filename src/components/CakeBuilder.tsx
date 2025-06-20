import { Layer } from "../models/Layer";
import "./CakeBuilder.css";
import LayerAdd from "./LayerAdd";
import LayerBuilder from "./LayerBuilder";

interface Props {
  layers: Layer[];
  addLayer: (newLayer: Layer) => void;
  deleteLayer: (index: number) => void;
}

const CakeBuilder = ({ layers, addLayer, deleteLayer }: Props) => {
  return (
    <div className="cake-builder">
      <h2>Build Your Cake</h2>

      <LayerAdd onAddLayer={addLayer} layerCount={layers.length} />
    </div>
  );
};

export default CakeBuilder;
