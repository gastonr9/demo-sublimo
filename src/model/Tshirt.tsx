import { useEffect } from "react";
import { useGLTF} from "@react-three/drei";

import modelGltf from "../assets/3d/tshirt.glb";
import { Irgb } from "../types";

const Tshirt = ({
  color,

}: {
  color: Irgb;

}) => {
  const { nodes, materials } = useGLTF(modelGltf) as any;




  useEffect(() => {
    if (color.r < 5 && color.g < 5 && color.b < 5) {
      materials.color.color.r = 5;
      materials.color.color.g = 5;
      materials.color.color.b = 5;
    } else {
      materials.color.color.r = color.r;
      materials.color.color.g = color.g;
      materials.color.color.b = color.b;
    }
  }, [color]);

  
  return (
    <group scale={6}>
      <mesh
        castShadow
        receiveShadow
        name="tshirt"
        geometry={nodes.tshirt.geometry}
        material={materials.color}
        position={0}
        dispose={null}
      >
      
      </mesh>
    </group>
  );
};

export default Tshirt;
