import "./Instructions.css";
import popupImage from "../assets/pop-up.png";

interface Props {
  onClose: () => void;
}

const Instructions = ({ onClose }: Props) => {
  return (
    <div className="modal-backdrop">
      <div
        className="InstructionsContainer"
        style={{ backgroundImage: `url(${popupImage})` }}
      >
        <div className="InstructionsOverlay">
          <div className="InstructionsText">
            <h2 className="instruct">Instructions</h2>
            <ul className="steps">
              <li>Let's make a cake!</li>
              <li>1. Click Add Layer</li>
              <li>2. Select a cake flavor</li>
              <li>3. Build up to 4 magical layers</li>
            </ul>
            <button className="closeBtn" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
