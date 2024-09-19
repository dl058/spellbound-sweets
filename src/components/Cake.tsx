import { Layer } from "../models/Layer";
import "./Cake.css";
import CakeLayer from "./CakeLayer";
interface Props {
  layers: Layer[];
}
const Cake = ({ layers }: Props) => {
  return (
    <div className="Cake">
      {layers.map((layer) => {
        return <CakeLayer layer={layer} />;
      })}
    </div>
  );
};

export default Cake;
