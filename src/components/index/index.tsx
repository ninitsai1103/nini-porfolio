"use client";
import dynamic from "next/dynamic";

const BallCanvas = dynamic(() => import("@/src/components/three/BallCanvas"), { ssr: false});

export default function Index() {
  return (
    <>
      <BallCanvas />
    </>
  );
}
