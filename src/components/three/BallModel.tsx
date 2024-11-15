"use client";

import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

useGLTF.preload("/models/ball.glb");

export default function BallModel() {
  const BallPath = "/models/ball.glb";
  const { scene } = useGLTF(BallPath);

  useEffect(() => {
    console.log(scene)
  }, [])

  return (
      <primitive object={scene} scale={2} />
  )
}
