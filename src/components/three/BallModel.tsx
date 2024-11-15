"use client";

import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

useGLTF.preload("/models/ball.glb");

export default function BallModel() {
  const BallPath = "/models/ball.glb";
  const { scene } = useGLTF(BallPath);
  const modelRef = useRef<THREE.Object3D>();

  useGSAP(() => {
    if (!modelRef.current) {
      return;
    }
    if (modelRef.current) {
      gsap.fromTo(
        modelRef.current.position,
        { x: -1, y: 8, z: 0 },
        { x: -1, y: 1, z: 0, duration: 3, ease: "bounce.out" }
      );
    }
  }, [modelRef]);

  return <primitive object={scene} scale={50} ref={modelRef} />;
}
