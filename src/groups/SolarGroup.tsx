import React from "react";
import { useFrame, ThreeElements } from "@react-three/fiber";
import SunMesh from "@/components/SunMesh";
import EarthGroup from "./EarthGroup";
import MercuryGroup from "./MercuryGroup";

export default function SolarGroup(props: ThreeElements["group"]) {
  return (
    <group>
      <SunMesh
        props={{
          position: [0, 0, 0],
        }}
        texture={"/texture/2k_sun.jpg"}
        size={3}
        rotationDelta={0.01}
      />
      <EarthGroup />
      <MercuryGroup />
    </group>
  );
}
