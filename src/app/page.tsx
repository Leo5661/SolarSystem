"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Stats, OrbitControls } from "@react-three/drei";
import PlanetMesh from "@/components/PlanetMesh";
import SunMesh from "@/components/SunMesh";
import SolarGroup from "@/groups/SolarGroup";

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-between">
      <Canvas camera={{ fov: 50, near: 0.1, far: 100, position: [18, 3, -5] }}>
        <Suspense fallback={null}>
          <SolarGroup />
          <OrbitControls />
        </Suspense>
        <Stats />
        <gridHelper args={[20, 20, "tomato", "lightgreen"]} />
      </Canvas>
    </main>
  );
}
