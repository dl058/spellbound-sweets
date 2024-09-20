import { useState } from "react";
import "./App.css";
import Cake from "./components/Cake";
import CakeBuilder from "./components/CakeBuilder";
import { Layer } from "./models/Layer";

function App() {
  // state goes here
  const [layers, setLayers] = useState<Layer[]>([
    {
      flavor: "strawberry",
      design: "stars",
      height: 10,
      width: 10,
    },
    {
      flavor: "ube",
      design: "butterflies",
      height: 10,
      width: 10,
    },
    {
      flavor: "blueberry",
      design: "flowers",
      height: 10,
      width: 10,
    },
  ]);

  const addLayer = (newLayer: Layer): void => {
    setLayers((prev) => {
      return [...prev, newLayer];
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
        <div>
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
