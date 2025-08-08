import {useState } from "react";

import { Model } from "../model";
import { Tab1, Tab2} from "../containers";
import { Irgb } from "../types";

const Home = () => {
  const [color, setColor] = useState({ r: 19, g: 97, b: 189 });




  const changeColor = (rgb: Irgb) => setColor(rgb);

  return (
    <div className="relative w-[90vw] h-[100vh] overflow-hidden place-self-center ">
      {/* Modelo centrado */}
      <div className="absolute inset-0 z-10">
        <Model
          color={color}

        />
      </div>

      {/* Tab izquierda (Tab1 y Tab2 en columna) */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20 space-y-4">
        <Tab2
          changeColor={changeColor}
          color={color}
        />
        <Tab1 color={color} />
      </div>

      
    </div>
  );
};

export default Home;
