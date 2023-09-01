import React, { useRef } from "react";
import { Group } from "three";
import { useFrame, ThreeElements } from "@react-three/fiber";
import PlanetMesh from "@/components/PlanetMesh";

const rotationDelta = 0.04;

export default function MercuryGroup(props: ThreeElements["group"]) {
  const mercuryGroupRef = useRef<Group>(null);

  useFrame((state, delta) => {
    if (mercuryGroupRef.current) {
      mercuryGroupRef.current.rotation.y += delta * rotationDelta;
    }
  });

  return (
    <group {...props} ref={mercuryGroupRef}>
      <PlanetMesh
        props={{
          position: [7, 0, 0],
        }}
        texture={"/texture/2k_mercury.jpg"}
        size={0.5}
        rotationDelta={0.5}
      />
    </group>
  );
}
