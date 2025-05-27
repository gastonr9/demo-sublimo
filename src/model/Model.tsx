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
<<<<<<< HEAD
    <Canvas
      className=""
      shadows
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 10,
        position: [0, 0, 60],
      }}
    >
      <hemisphereLight groundColor={"#000000"} intensity={0.015} />

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
        minDistance={20}
        maxPolarAngle={Math.PI / 0}
        minPolarAngle={Math.PI / 100}
        enablePan={false}
      />
    </Canvas>
=======
    <div className="">
      <Canvas
        shadows
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 25,
          position: [0, 5, 10],
        }}
      >
        <Suspense fallback={<Loader />}>
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
            target={[0, isMobile ? 0.8 : 0.4, 0]}
            maxDistance={30}
            minDistance={8}
            maxPolarAngle={Math.PI / 1.94}
            minPolarAngle={Math.PI / 4}
            enablePan={false}
          />
        </Suspense>
      </Canvas>
    </div>
>>>>>>> master
  );
};

export default Model;
