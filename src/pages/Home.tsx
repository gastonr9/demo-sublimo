import { useEffect, useState } from "react";

import { Model } from "../model";
import { Tab1, Tab2, Tab3 } from "../containers";
import { reader } from "../helper";
import { Irgb } from "../types";

const Home = () => {
  const [color, setColor] = useState({ r: 19, g: 97, b: 189 });
  const [isLogo, setIsLogo] = useState(true);
  const [logoS, setLogoS] = useState(0);
  const [logoP, setLogoP] = useState(2);
  const [logo, setLogo] = useState("./logo.png");
  const [file, setFile] = useState<File | null>(null);
  const [img, setImg] = useState<string | null>(null);

  useEffect(() => {
    if (file) {
      reader(file).then((result) => setImg(result));
    }
  }, [file]);

  const handleLogo = () => setIsLogo(!isLogo);
  const handleLogoP = (ind: number) => setLogoP(ind);
  const handleLogoS = (ind: number) => setLogoS(ind);
  const changeColor = (rgb: Irgb) => setColor(rgb);

  return (
    <div className="relative w-[90vw] h-[100vh] overflow-hidden place-self-center ">
      {/* Modelo centrado */}
      <div className="absolute inset-0 z-10">
        <Model
          color={color}
          logo={logo}
          isLogo={isLogo}
          logoP={logoP}
          logoS={logoS}
        />
      </div>

      {/* Tab izquierda (Tab1 y Tab2 en columna) */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20 space-y-4">
        <Tab2
          changeColor={changeColor}
          color={color}
          setFile={setFile}
          img={img}
          setLogo={setLogo}
        />
        <Tab1 color={color} handleLogo={handleLogo} isLogo={isLogo} />
      </div>

      {/* Tab derecha */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20">
        <Tab3
          color={color}
          logoS={logoS}
          logoP={logoP}
          handleLogoP={handleLogoP}
          handleLogoS={handleLogoS}
        />
      </div>

      {/* Tab inferior (opcional, si querés una más abajo) */}
      {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
        <OtroTabInferior />
      </div> */}
    </div>
  );
};

export default Home;
