import { useEffect, useRef, useState } from "react";

import { Model } from "../model";
import { Tab1, Tab2, Tab3 } from "../containers";
import { reader } from "../helper";
import { Irgb } from "../types";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [color, setColor] = useState({ r: 19, g: 97, b: 189 });
  const [isLogo, setIsLogo] = useState(true);
  const [logoS, setLogoS] = useState(0);
  const [logoP, setLogoP] = useState(2);
  const [logo, setLogo] = useState("./logo.png");
  const [file, setFile] = useState<File | null>(null);
  const [img, setImg] = useState<string | null>(null);

  const tref = useRef(null);

  useEffect(() => {
    if (file) {
      reader(file).then((result) => setImg(result));
    }
  }, [file]);

  const handleLogo = () => {
    setIsLogo(!isLogo);
  };

  const handleLogoP = (ind: number) => {
    setLogoP(ind);
  };
  const handleLogoS = (ind: number) => {
    setLogoS(ind);
  };

  const changeColor = (rgb: Irgb) => {
    setColor({ r: rgb.r, g: rgb.g, b: rgb.b });
  };

  useEffect(() => {
    if (window.innerWidth < 768) setIsMobile(true);
  }, []);

  const checkScreen = () => {
    if (window.innerWidth < 768) setIsMobile(true);
    else setIsMobile(false);
  };

  window.addEventListener("resize", checkScreen);

  return (
    <div className="">
      <div className="relative centro z-10 ">
        {/* Remera en el centro */}
        <div className=" absolute inset-0 flex items-center w-[650px] h-[700px] justify-center z-10 place-self-center">
          <Model
            isMobile={isMobile}
            color={color}
            logo={logo}
            isLogo={isLogo}
            logoP={logoP}
            logoS={logoS}
          />
        </div>

        {/* Tab izquierda */}
        <div className="relative w-full h-full">
          <div className="absolute left-4 top-[20%] z-20">
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
          <div className="absolute top-[15%] right-4 z-20">
            <Tab3
              color={color}
              logoS={logoS}
              logoP={logoP}
              handleLogoP={handleLogoP}
              handleLogoS={handleLogoS}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
