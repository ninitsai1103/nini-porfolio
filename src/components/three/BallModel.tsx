"use client";

import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useEffect, useRef, RefObject } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


interface BallCanvasProps {
  scrollRotate: RefObject<HTMLDivElement>;
}

useGLTF.preload("/models/ball.glb");

gsap.registerPlugin(ScrollTrigger);

export default function BallModel({ scrollRotate }: BallCanvasProps) {
  const BallPath = "/models/ball.glb";
  const { scene } = useGLTF(BallPath);
  const modelRef = useRef<THREE.Object3D>();

  //初始動畫
  useEffect(() => {
    if (modelRef.current) {
      gsap.fromTo(
        modelRef.current.position,
        { x: -10, y: 30, z: 0 },
        { x: -10, y: 20, z: 0, duration: 3, ease: "bounce.out" }
      );
    }
  }, []); 

  // 球體自滾動動畫
  useGSAP(() => {
    if (!modelRef.current) return;

    gsap.to(modelRef.current.rotation, {
      scrollTrigger: {
        trigger: scrollRotate.current, // 觸發滾動的元素
        start: "top bottom", // 當滾動元素的上邊緣進入視窗底部時開始
        end: "bottom top", // 當滾動元素的下邊緣進入視窗頂部時結束
        scrub: true, // 讓動畫與滾動進度同步
      },
      x: "+=360", // 沿 x 軸旋轉 360 度
      duration: 3,
      ease: "none", // 不要加任何緩動，讓它隨滾動完全同步
    });
  }, [scrollRotate]); // 每次 scrollRotate 改變時觸發

  return <primitive object={scene} scale={100} ref={modelRef} />;
}
