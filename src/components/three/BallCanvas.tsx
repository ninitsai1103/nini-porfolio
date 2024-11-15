"use client";

import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const BallModel = dynamic(() => import("./BallModel"), { ssr: false });

export default function BallCanvas() {
  return (
    <Canvas gl={{antialias: true}} dpr={[1, 1.5]} camera={{ position: [-0.5, 0, 4]}}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} />
      <Suspense fallback={null}>
        <BallModel />
      </Suspense>
    </Canvas>
  );
}
