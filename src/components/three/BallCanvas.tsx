"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
import { Suspense } from "react";
// import BallModel from "./BallModel";

const BallModel = dynamic(() => import("./BallModel"), { ssr: false });

export default function BallCanvas() {
  return (
    <Canvas gl={{antialias: true}} dpr={[1, 1.5]} camera={{ position: [0, 0, 5]}}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} />
      <Suspense fallback={null}>
        <BallModel />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
