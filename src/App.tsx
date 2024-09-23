import { useState } from "react";
import "./App.css";
import Cake from "./components/Cake";
import CakeBuilder from "./components/CakeBuilder";
import { Layer } from "./models/Layer";

function App() {
  // state goes here
  const [layers, setLayers] = useState<Layer[]>([]);

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

  // const layer

  return (
    <>
      <h1>Cakes</h1>
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
