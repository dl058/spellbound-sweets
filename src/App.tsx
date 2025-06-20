import { useEffect, useState } from "react";
import Instructions from "./components/Instructions";
import Cake from "./components/Cake";
import CakeBuilder from "./components/CakeBuilder";
import { Layer } from "./models/Layer";

function App() {
  const [layers, setLayers] = useState<Layer[]>([]);
  const [openInstructions, setOpenInstructions] = useState(false);

  useEffect(() => {
    setOpenInstructions(true); // Always show on every load
  }, []);

  const addLayer = (newLayer: Layer) => {
    setLayers((prev) => [newLayer, ...prev]);
  };

  const deleteLayer = (index: number) => {
    setLayers((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  };

  const handleCloseInstructions = () => {
    setOpenInstructions(false);
  };

  return (
    <>
      {openInstructions && <Instructions onClose={handleCloseInstructions} />}
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
