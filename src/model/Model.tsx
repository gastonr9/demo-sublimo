import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { Tshirt } from ".";
import { Loader } from "../containers";
import { Irgb } from "../types";

const Model = ({
  isMobile,
  color,
  logo,
  isLogo,
  logoP,
  logoS,
}: {
  isMobile: boolean;
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
        position: [0, 5, 25],
      }}
    >
      <hemisphereLight groundColor={"#111"} intensity={0.01} />
      <Tshirt
        logo={logo}
        color={color}
        logoP={logoP}
        logoS={logoS}
        isMobile={isMobile}
        isLogo={isLogo}
      />
      <OrbitControls
        target={[0, isMobile ? 0.8 : -0.3, 0]}
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
