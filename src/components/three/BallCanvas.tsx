"use client";

import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
import { Suspense, useRef, RefObject } from "react";

interface BallCanvasProps {
  scrollRotate: RefObject<HTMLDivElement>;
}

const BallModel = dynamic(() => import("./BallModel"), { ssr: false });

export default function BallCanvas({ scrollRotate }: BallCanvasProps) {
  const BallCanvas = useRef<HTMLCanvasElement>(null);
  return (
    <Canvas
      gl={{ antialias: true }}
      dpr={[1, 1.5]}
      orthographic
      camera={{ zoom: 60, position: [0, 0, 6] }}
      ref={BallCanvas}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} />
      <Suspense fallback={null}>
          <BallModel scrollRotate={scrollRotate} />
      </Suspense>
    </Canvas>
  );
}
