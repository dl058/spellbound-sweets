import { Layer } from "../models/Layer";
import "./Cake.css";
import CakeLayer from "./CakeLayer";
import CakePlatter from "../assets/cake-stand.png";

interface Props {
  layers: Layer[];
}

const Cake = ({ layers }: Props) => {
  return (
    <div className="Cake">
      <img src={CakePlatter} alt="cake platter" className="cake-platter" />
      {layers.map((layer, index) => (
        <CakeLayer key={index} layer={layer} index={index} />
      ))}
    </div>
  );
};

export default Cake;
