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
      {layers.map((layer) => {
        return <CakeLayer layer={layer} />;
      })}
      <img src={CakePlatter} alt="cake platter" className="cake-platter" />
    </div>
  );
};

export default Cake;
