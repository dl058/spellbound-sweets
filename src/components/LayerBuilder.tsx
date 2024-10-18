import { Layer } from "../models/Layer";
import "./LayerBuilder.css";

interface Props {
  layer: Layer;
  index: number;
  deleteLayer: (index: number) => void;
}

const LayerBuilder = ({ layer, index, deleteLayer }: Props) => {
  const handleDelete = () => {
    deleteLayer(index);
  };
  return (
    <div className="LayerBuilder">
      <button className="deleteBtn" onClick={handleDelete}>
        Delete {layer.flavor}
      </button>
    </div>
  );
};

export default LayerBuilder;
