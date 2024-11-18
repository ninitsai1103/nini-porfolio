"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";

const BallCanvas = dynamic(() => import("@/src/components/three/BallCanvas"), {
  ssr: false,
});

export default function Index() {
  const scrollRotate = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="w-full h-[300dvh]" ref={scrollRotate}>
        <BallCanvas scrollRotate={scrollRotate} />
      </div>
    </>
  );
}
