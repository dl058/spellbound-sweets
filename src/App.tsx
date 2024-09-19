import { useState } from "react";
import "./App.css";
import Cake from "./components/Cake";
import CakeBuilder from "./components/CakeBuilder";
import { Layer } from "./models/Layer";

// state goes here

function App() {
  const [layers, setLayers] = useState<Layer[]>([
    {
      color: "pink",
      flavor: "strawberry",
      height: 10,
      texture: "cloud",
      shape: "heart",
    },
    {
      color: "pink",
      flavor: "strawberry",
      height: 10,
      texture: "cloud",
      shape: "heart",
    },
    {
      color: "pink",
      flavor: "strawberry",
      height: 10,
      texture: "cloud",
      shape: "heart",
    },
  ]);

  return (
    <>
      <h1>Cakes</h1>
      <main>
        <div>
          <Cake layers={layers} />
          <CakeBuilder />
        </div>
      </main>
    </>
  );
}

export default App;
