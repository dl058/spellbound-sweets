import { useEffect, useState } from "react";
import "./App.css";
import Cake from "./components/Cake";
import CakeBuilder from "./components/CakeBuilder";
import { Layer } from "./models/Layer";
import Instructions from "./components/Instructions";

function App() {
  // state goes here
  const [layers, setLayers] = useState<Layer[]>([]);
  const [openInstructions, setOpenInstructions] = useState<boolean>(false);

  useEffect(() => {
    setOpenInstructions(true);
  }, []);

  const addLayer = (newLayer: Layer): void => {
    setLayers((prev) => {
      return [newLayer, ...prev];
    });
  };

  const deleteLayer = (index: number): void => {
    setLayers((prev) => {
      return [...prev.slice(0, index), ...prev.slice(index + 1)];
    });
  };
  const handleClose = () => {
    setOpenInstructions(false);
  };

  return (
    <>
      {openInstructions && (
        <>
          <Instructions />
          <button onClick={handleClose} className="closeBtn">
            Close
          </button>
        </>
      )}
      <h1>Spellbound Sweets</h1>
      <main>
        <div className="Container">
          <Cake layers={layers} />
          <CakeBuilder
            addLayer={addLayer}
            deleteLayer={deleteLayer}
            layers={layers}
          />
        </div>
      </main>
    </>
  );
}

export default App;
