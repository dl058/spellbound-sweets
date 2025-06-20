import { Layer } from "../models/Layer";
import moonlightVanilla from "../assets/moonlightVanilla.png";
import chocoFire from "../assets/chocoFire.png";
import strawberryDust from "../assets/strawberryDust.png";
import fairyBerry from "../assets/fairyBerry.png";
import "./CakeLayer.css";

interface Props {
  layer: Layer;
  index: number; // ✅ Add index to the props
}

const CakeLayer = ({ layer, index }: Props) => {
  let flavorImage = "";
  if (layer.flavor === "moonlight-vanilla") {
    flavorImage = moonlightVanilla;
  } else if (layer.flavor === "chocolate-dragon-fire") {
    flavorImage = chocoFire;
  } else if (layer.flavor === "stardust-strawberry") {
    flavorImage = strawberryDust;
  } else if (layer.flavor === "fairy-berry") {
    flavorImage = fairyBerry;
  }

  const scaleFactor = 1 - index * 0.07; // Shrink each layer slightly by index
  const width = layer.width * scaleFactor;
  const height = layer.height * scaleFactor;

  return (
    <div
      className={`CakeLayer ${layer.flavor}`}
      style={{
        height: `${height}px`,
        width: `${width}px`,
        backgroundImage: `url(${flavorImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        position: "relative",
        zIndex: 100 - index,
        margin: "0 auto",
      }}
    >
      {/* Sparkles */}
      <div className="sparkle sparkle1"></div>
      <div className="sparkle sparkle2"></div>
      <div className="sparkle sparkle3"></div>
      <div className="sparkle sparkle4"></div>

      {/* Swirls */}
      <div className="swirl swirl1"></div>
      <div className="swirl swirl2"></div>
      <div className="swirl swirl3"></div>
      <div className="swirl swirl4"></div>

      {/* Berries */}
      <div className="berry berry1"></div>
      <div className="berry berry2"></div>
      <div className="berry berry3"></div>
      <div className="berry berry4"></div>
    </div>
  );
};

export default CakeLayer;
