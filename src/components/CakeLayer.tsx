import { Layer } from "../models/Layer";
import crystal from "../assets/crystal.png";
import rainbow from "../assets/rainbow.png";
import cloud from "../assets/cloud.png";
import stars from "../assets/stars.png";
import "./CakeLayer.css";
interface Props {
  layer: Layer;
}
const CakeLayer = ({ layer }: Props) => {
  let backgroundImage = "";
  if (layer.design === "crystal-cave") {
    backgroundImage = crystal;
  }
  if (layer.design === "rainbow-isles") {
    backgroundImage = rainbow;
  }
  if (layer.design === "cloud-kingdom") {
    backgroundImage = cloud;
  }
  if (layer.design === "starry-night") {
    backgroundImage = stars;
  }
  return (
    <div
      className={`CakeLayer ${layer.flavor}`}
      style={{
        height: `${layer.height}px`,
        width: `${layer.width}px`,
        backgroundImage: `url(${backgroundImage})`,
      }}
    ></div>
  );
};

export default CakeLayer;
