import CakeLayer from "./CakeLayer";
import { Layer } from "../models/Layer";

interface Props {
  layer: Layer;
  index: number;
  deleteLayer: (index: number) => void;
}

const LayerBuilder = ({ layer, index, deleteLayer }: Props) => {
  return (
    <div className="layer-wrapper">
      <CakeLayer layer={layer} index={index} />
      <button onClick={() => deleteLayer(index)}>Remove</button>
    </div>
  );
};

export default LayerBuilder;
