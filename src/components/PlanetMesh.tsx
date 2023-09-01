import React, { useRef } from "react";
import { Mesh } from "three";
import { useFrame, ThreeElements } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

type PlanetProps = {
  props: ThreeElements["mesh"];
  texture: string;
  size: number;
  rotationDelta: number;
};

export default function PlanetMesh({
  props,
  texture,
  size,
  rotationDelta,
}: PlanetProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * rotationDelta;
    }
  });

  const planetTexture = useTexture(texture);

  return (
    <mesh {...props} ref={meshRef}>
      <sphereGeometry args={[size, 32, 16]} />
      <meshBasicMaterial map={planetTexture} />
    </mesh>
  );
}
