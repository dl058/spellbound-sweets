import { Layer } from "../models/Layer";
import "./LayerBuilder.css";

interface Props {
  layer: Layer;
  index: number;
  deleteLayer: (index: number) => void;
}

const LayerBuilder = ({ index, deleteLayer }: Props) => {
  return (
    <div className="LayerBuilder">
      <button
        className="deleteBtn"
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
