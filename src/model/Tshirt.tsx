import { useEffect } from "react";
import { useGLTF, useTexture, Decal } from "@react-three/drei";
import * as THREE from "three";

import modelGltf from "../assets/3d/tshirt.glb";
import { Irgb } from "../types";

const Tshirt = ({
  logo,
  color,
  logoP,
  logoS,
  isLogo,
}: {
  logo: string;
  color: Irgb;
  logoP: number;
  logoS: number;
  isLogo: boolean;
}) => {
  const { nodes, materials } = useGLTF(modelGltf) as any;

  const logoTex = useTexture(logo);

  useEffect(() => {}, [logo]);

  logoTex.colorSpace = THREE.SRGBColorSpace;

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

  const genP = () => {
    switch (logoP) {
      case 0:
        return -0.075;
      case 1:
        return 0;
      case 2:
        return 0.075;
      default:
        return 0;
    }
  };
  const genS = () => {
    switch (logoS) {
      case 0:
        return 0.09;
      case 1:
        return 0.12;
      case 2:
        return 0.17;
    }
  };

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
        {isLogo && (
          <Decal
            position={[genP(), 0.08, 0.13]}
            rotation={[0, 0, 0]}
            scale={genS()}
            map={logoTex}
            depthTest={true}
          />
        )}
      </mesh>
    </group>
  );
};

export default Tshirt;
