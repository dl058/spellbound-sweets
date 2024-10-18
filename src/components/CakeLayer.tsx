import { Layer } from "../models/Layer";
import moonlightVanilla from "../assets/moonlightVanilla.png";
import chocoFire from "../assets/chocoFire.png";
import strawberryDust from "../assets/strawberryDust.png";
import fairyBerry from "../assets/fairyBerry.png";
import "./CakeLayer.css";
// import marshmallow from "../assets/marshmallow.png";
// import crystal from "../assets/crystal.png";
// import rainbow from "../assets/rainbow.png";
// import cloud from "../assets/cloud.png";
// import stars from "../assets/stars.png";

interface Props {
  layer: Layer;
}
const CakeLayer = ({ layer }: Props) => {
  // let designImage = "";
  // if (layer.design === "crystal-cave") {
  //   designImage = crystal;
  // }
  // if (layer.design === "rainbow-isles") {
  //   designImage = rainbow;
  // }
  // if (layer.design === "cloud-kingdom") {
  //   designImage = cloud;
  // }
  // if (layer.design === "starry-night") {
  //   designImage = stars;
  // }

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
        position: "relative",
      }}
    >
      <>
        <div className="sparkle sparkle1"></div>
        <div className="sparkle sparkle2"></div>
        <div className="sparkle sparkle3"></div>
        <div className="sparkle sparkle4"></div>
      </>
      <>
        {/* Glittering Sparkles */}
        <div className="sparkle sparkle1"></div>
        <div className="sparkle sparkle2"></div>
        <div className="sparkle sparkle3"></div>
        <div className="sparkle sparkle4"></div>

        {/* Swirling Particles */}
        <div className="swirl swirl1"></div>
        <div className="swirl swirl2"></div>
        <div className="swirl swirl3"></div>
        <div className="swirl swirl4"></div>
      </>
      <>
        {/* Floating berries */}
        <div className="berry berry1"></div>
        <div className="berry berry2"></div>
        <div className="berry berry3"></div>
        <div className="berry berry4"></div>

        {/* Sparkles */}
        <div className="sparkle sparkle1"></div>
        <div className="sparkle sparkle2"></div>
        <div className="sparkle sparkle3"></div>
        <div className="sparkle sparkle4"></div>
      </>

      {/* <div
        className="design"
        style={{ backgroundImage: `url(${designImage})` }}
      ></div> */}
    </div>
  );
};

export default CakeLayer;
