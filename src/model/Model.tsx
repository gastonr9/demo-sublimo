import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { Tshirt } from ".";
import { Irgb } from "../types";

const Model = ({
  color,
  logo,
  isLogo,
  logoP,
  logoS,
}: {
  color: Irgb;
  logo: string;
  isLogo: boolean;
  logoS: number;
  logoP: number;
}) => {
  return (
    <Canvas
      className=""
      shadows
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 10,
        position: [0, 20, 25],
      }}
    >
      <hemisphereLight groundColor={"#111"} intensity={0.01} />
      <Tshirt
        logo={logo}
        color={color}
        logoP={logoP}
        logoS={logoS}
        isLogo={isLogo}
      />
      <OrbitControls
        target={0}
        maxDistance={30}
        minDistance={10}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 4}
        enablePan={false}
      />
    </Canvas>
  );
};

export default Model;
