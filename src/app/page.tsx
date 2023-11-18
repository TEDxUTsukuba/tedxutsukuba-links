"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { MdTranslate } from "react-icons/md";
import { MdOutlineAssignment } from "react-icons/md";

export default function Home() {
  const [vortexPositions, setVortexPositions] = useState([
    { x: 0, y: 0, size: 0, zIndex: 0 },
    { x: 0, y: 0, size: 0, zIndex: 0 },
    { x: 0, y: 0, size: 0, zIndex: 0 },
    { x: 0, y: 0, size: 0, zIndex: 0 },
    { x: 0, y: 0, size: 0, zIndex: 0 },
    { x: 0, y: 0, size: 0, zIndex: 0 },
    { x: 0, y: 0, size: 0, zIndex: 0 },
    { x: 0, y: 0, size: 0, zIndex: 0 },
  ]);

  const getWindowSize = () => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  };

  // vortexをランダムに配置する関数
  const randomizeVortexPositions = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const windowSize = windowHeight * windowWidth;

    // const newVortexPositions = Array.from({ length: vortexCount }, () => ({
    //   x: Math.random() * (windowSize.width - maxSize),
    //   y: Math.random() * (windowSize.height - maxSize),
    //   size: Math.random() * (maxSize - minSize) + minSize,
    //   zIndex:
    //     Math.floor(Math.random() * (maxZIndex - minZIndex + 1)) + minZIndex,
    // }));

    const newVortexPositions = vortexPositions.map(() => {
      const size =
        Math.random() * Math.max(windowWidth, windowHeight) * 0.8 +
        Math.min(windowWidth, windowHeight) * 0.1;
      return {
        x: Math.random() * windowWidth - size / 2,
        y: Math.random() * windowHeight - size / 2,
        size: size,
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
    <main>
      <div className="z-0">
        {/* 渦画像たち */}
        {vortexPositions.map((vortex, index) => (
          <img
            key={index}
            src={`/vortex/0${index + 1}_transparent.png`}
            alt={`渦${index + 1}`}
            className="fixed pointer-events-none top-0 left-0 w-1/2"
            style={{
              transform: `translate(${vortex.x}px, ${vortex.y}px)`,
              width: `${vortex.size}px`,
              zIndex: vortex.zIndex,
            }}
          />
        ))}
      </div>
      <div className="min-h-screen overflow-scroll p-3 background-blur bg-white bg-opacity-20">
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
              <div className="relative max-w-[200px]">
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
              <div className="relative max-w-[200px]">
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
              <div className="relative max-w-[200px]">
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
    </main>
  );
}
