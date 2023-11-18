"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { MdTranslate } from "react-icons/md";
import { MdOutlineAssignment } from "react-icons/md";
import { Parallax } from "react-scroll-parallax";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  const linkDivRef = useRef<HTMLDivElement>(null);
  const [vortexPositions, setVortexPositions] = useState([
    { x: 0, y: 0, size: 0, speed: 0, zIndex: 0 },
    { x: 0, y: 0, size: 0, speed: 0, zIndex: 0 },
    { x: 0, y: 0, size: 0, speed: 0, zIndex: 0 },
    { x: 0, y: 0, size: 0, speed: 0, zIndex: 0 },
    { x: 0, y: 0, size: 0, speed: 0, zIndex: 0 },
    { x: 0, y: 0, size: 0, speed: 0, zIndex: 0 },
    { x: 0, y: 0, size: 0, speed: 0, zIndex: 0 },
    { x: 0, y: 0, size: 0, speed: 0, zIndex: 0 },
  ]);

  // vortexをランダムに配置する関数
  const randomizeVortexPositions = () => {
    const windowWidth = linkDivRef.current?.scrollWidth || 0;
    const windowHeight = linkDivRef.current?.scrollHeight || 0;
    const windowSize = windowHeight * windowWidth;
    console.log(windowHeight, windowWidth, windowSize);

    const newVortexPositions = vortexPositions.map(() => {
      const size =
        Math.min(windowHeight, windowWidth) * Math.random() * 0.7 +
        Math.min(windowHeight, windowWidth) * 0.4;
      return {
        x: Math.random() * windowWidth - size / 2,
        y: Math.random() * windowHeight - size / 2,
        size: size,
        // sizeが大きいほど値が０に近づく
        speed: -(1 - size / windowSize) * 10,
        zIndex: 0,
      };
    });

    setVortexPositions(newVortexPositions);
  };

  useEffect(() => {
    randomizeVortexPositions();
    window.addEventListener("resize", randomizeVortexPositions);

    return () => {
      window.removeEventListener("resize", randomizeVortexPositions);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ParallaxProvider>
      <main className="overflow-hidden">
        <div
          className="min-h-screen overflow-y-scroll overflow-x-hidden relative"
          ref={linkDivRef}
        >
          {/* 渦画像たち */}
          {vortexPositions.map((vortex, index) => (
            // <Parallax key={index} speed={vortex.speed}>
            <img
              key={index}
              src={`/vortex/0${index + 1}_transparent.png`}
              alt={`渦${index + 1}`}
              className="absolute pointer-events-none"
              style={{
                transform: `translate(${vortex.x}px, ${vortex.y}px)`,
                width: `${vortex.size}px`,
                zIndex: vortex.zIndex,
              }}
            />
            // </Parallax>
          ))}
          <div className="background-blur bg-white p-3 bg-opacity-20">
            <div className="container mx-auto py-12">
              <div className="flex flex-col gap-3 justify-center items-center">
                <img
                  src="tedxutsukuba.png"
                  alt="TEDxUTsukuba"
                  className="w-[60%] mx-auto max-w-md"
                />
                <h1 className="text-5xl font-bold text-center font-serif">
                  万華鏡
                </h1>
              </div>
              <div className="py-12">
                <div className="flex justify-start">
                  <div className="relative w-[70%]">
                    <img
                      src="/vortex/01_transparent.png"
                      alt="渦1"
                      className="w-full active:rotate-30 transition-all duration-500"
                    />
                    <div className="absolute rounded-full w-[70%] h-[70%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-100 border-2 bg-opacity-50 backdrop-blur-sm border-purple-400 flex justify-center items-center">
                      <div className="flex flex-col gap-2 items-center">
                        <MdTranslate className="text-5xl text-purple-800" />
                        <p className="text-xl font-bold text-center text-purple-800 font-serif">
                          翻訳
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="relative w-[70%]">
                    <img
                      src="/vortex/03_transparent.png"
                      alt="渦1"
                      className="w-full active:rotate-30 transition-all duration-500"
                    />
                    <div className="absolute rounded-full w-[70%] h-[70%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-100 border-2 bg-opacity-50 backdrop-blur-sm border-cyan-400 flex justify-center items-center">
                      <div className="flex flex-col gap-2">
                        <img
                          src="CSLogo.svg"
                          alt="Comment Screen"
                          className="w-10 mx-auto"
                        />
                        <p className="text-xs font-bold text-center text-cyan-800 font-serif">
                          Comment Screen
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="relative w-[70%]">
                    <img
                      src="/vortex/07_transparent.png"
                      alt="渦1"
                      className="w-full active:rotate-30 transition-all duration-500"
                    />
                    <div className="absolute rounded-full w-[70%] h-[70%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-pink-100 border-2 bg-opacity-50 backdrop-blur-sm border-pink-400 flex justify-center items-center">
                      <div className="flex flex-col gap-2 items-center">
                        <MdOutlineAssignment className="text-5xl text-pink-800" />
                        <p className="text-xl font-bold text-center text-pink-800 font-serif">
                          アンケート
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </ParallaxProvider>
  );
}
