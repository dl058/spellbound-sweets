import { Layer } from "../models/Layer";
import crystal from "../assets/crystal.png";
import rainbow from "../assets/rainbow.png";
import cloud from "../assets/cloud.png";
import stars from "../assets/stars.png";
import moonlightVanilla from "../assets/moonlightVanilla.png";
import chocoFire from "../assets/chocoFire.png";
import strawberryDust from "../assets/strawberryDust.png";
import marshmallow from "../assets/marshmallow.png";
import fairyBerry from "../assets/fairyBerry.png";
import "./CakeLayer.css";
interface Props {
  layer: Layer;
}
const CakeLayer = ({ layer }: Props) => {
  let designImage = "";
  if (layer.design === "crystal-cave") {
    designImage = crystal;
  }
  if (layer.design === "rainbow-isles") {
    designImage = rainbow;
  }
  if (layer.design === "cloud-kingdom") {
    designImage = cloud;
  }
  if (layer.design === "starry-night") {
    designImage = stars;
  }

  let flavorImage = "";
  if (layer.flavor === "moonlight-vanilla") {
    flavorImage = moonlightVanilla;
  }
  if (layer.flavor === "chocolate-dragon-fire") {
    flavorImage = chocoFire;
  }
  if (layer.flavor === "stardust-strawberry") {
    flavorImage = strawberryDust;
  }
  if (layer.flavor === "magical-marshmallow") {
    flavorImage = marshmallow;
  }
  if (layer.flavor === "fairy-berry") {
    flavorImage = fairyBerry;
  }

  return (
    <div
      className={`CakeLayer ${layer.flavor}`}
      style={{
        height: `${layer.height}px`,
        width: `${layer.width}px`,
        backgroundImage: `url(${flavorImage})`,
      }}
    >
      <div
        className="design"
        style={{ backgroundImage: `url(${designImage})` }}
      ></div>
    </div>
  );
};

export default CakeLayer;
