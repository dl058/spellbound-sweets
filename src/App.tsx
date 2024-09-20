import { useState } from "react";
import "./App.css";
import Cake from "./components/Cake";
import CakeBuilder from "./components/CakeBuilder";
import { Layer } from "./models/Layer";

// state goes here

function App() {
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
