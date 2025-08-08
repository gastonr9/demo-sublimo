import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { Tshirt } from ".";
import { Irgb } from "../types";

const Model = ({
  color,

}: {
  color: Irgb;

}) => {
  return (
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
        color={color}

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
  );
};

export default Model;
