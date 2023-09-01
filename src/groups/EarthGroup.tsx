import React, { useRef } from "react";
import { Group } from "three";
import { useFrame, ThreeElements } from "@react-three/fiber";
import PlanetMesh from "@/components/PlanetMesh";

const rotationDelta = 0.02;

export default function EarthGroup(props: ThreeElements["group"]) {
  const earthGroupRef = useRef<Group>(null);

  useFrame((state, delta) => {
    if (earthGroupRef.current) {
      earthGroupRef.current.rotation.y += delta * rotationDelta;
    }
  });

  return (
    <group {...props} ref={earthGroupRef}>
      <PlanetMesh
        props={{
          position: [18, 0, 0],
        }}
        texture={"/texture/2k_earth_daymap.jpg"}
        size={1}
        rotationDelta={0.05}
      />
    </group>
  );
}
