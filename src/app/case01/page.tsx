"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MdTranslate } from "react-icons/md";
import { MdOutlineAssignment } from "react-icons/md";

export default function Home() {
  const linkDivRef = useRef<HTMLDivElement>(null);
  const [vortexPositions, setVortexPositions] = useState([
    {
      x: "50%",
      y: "50%",
      size: 0,
      speed: 0,
      zIndex: 0,
      opacity: 0,
      duration: 0,
      scale: 0.95,
      rotate: 0,
    },
    {
      x: "50%",
      y: "50%",
      size: 0,
      speed: 0,
      zIndex: 0,
      opacity: 0,
      duration: 0,
      scale: 0.95,
      rotate: 0,
    },
    {
      x: "50%",
      y: "50%",
      size: 0,
      speed: 0,
      zIndex: 0,
      opacity: 0,
      duration: 0,
      scale: 0.95,
      rotate: 0,
    },
    {
      x: "50%",
      y: "50%",
      size: 0,
      speed: 0,
      zIndex: 0,
      opacity: 0,
      duration: 0,
      scale: 0.95,
      rotate: 0,
    },
    {
      x: "50%",
      y: "50%",
      size: 0,
      speed: 0,
      zIndex: 0,
      opacity: 0,
      duration: 0,
      scale: 0.95,
      rotate: 0,
    },
    {
      x: "50%",
      y: "50%",
      size: 0,
      speed: 0,
      zIndex: 0,
      opacity: 0,
      duration: 0,
      scale: 0.95,
      rotate: 0,
    },
    {
      x: "50%",
      y: "50%",
      size: 0,
      speed: 0,
      zIndex: 0,
      opacity: 0,
      duration: 0,
      scale: 0.95,
      rotate: 0,
    },
    {
      x: "50%",
      y: "50%",
      size: 0,
      speed: 0,
      zIndex: 0,
      opacity: 0,
      duration: 0,
      scale: 0.95,
      rotate: 0,
    },
    {
      x: "50%",
      y: "50%",
      size: 0,
      speed: 0,
      zIndex: 0,
      opacity: 0,
      duration: 0,
      scale: 0.95,
      rotate: 0,
    },
    {
      x: "50%",
      y: "50%",
      size: 0,
      speed: 0,
      zIndex: 0,
      opacity: 0,
      duration: 0,
      scale: 0.95,
      rotate: 0,
    },
    {
      x: "50%",
      y: "50%",
      size: 0,
      speed: 0,
      zIndex: 0,
      opacity: 0,
      duration: 0,
      scale: 0.95,
      rotate: 0,
    },
    {
      x: "50%",
      y: "50%",
      size: 0,
      speed: 0,
      zIndex: 0,
      opacity: 0,
      duration: 0,
      scale: 0.95,
      rotate: 0,
    },
    {
      x: "50%",
      y: "50%",
      size: 0,
      speed: 0,
      zIndex: 0,
      opacity: 0,
      duration: 0,
      scale: 0.95,
      rotate: 0,
    },
    {
      x: "50%",
      y: "50%",
      size: 0,
      speed: 0,
      zIndex: 0,
      opacity: 0,
      duration: 0,
      scale: 0.95,
      rotate: 0,
    },
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
        // 真ん中になる確率を低くし、左右に寄った配置にする
        x: `${windowWidth * Math.random() - size * 0.5}px`,
        y: `${windowHeight * Math.random() - size * 1.5}px`,
        size: size,
        // sizeが大きいほど値がマイナス値が小さくなる整数にする
        speed: -10 - Math.floor(Math.random() * 10),
        zIndex: 0,
        opacity: 1,
        duration: 300 + Math.floor(Math.random() * 7) * 300,
        scale: 1,
        rotate: 180,
      };
    });

    setVortexPositions(newVortexPositions);
  };

  useEffect(() => {
    randomizeVortexPositions();
    // window.addEventListener("resize", randomizeVortexPositions);

    // return () => {
    //   window.removeEventListener("resize", randomizeVortexPositions);
    // };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[100dvh] overflow-hidden">
        <div className="relative">
          {/* 渦画像たち */}
          {vortexPositions.map((vortex, index) => (
            // <Parallax key={index} speed={vortex.speed} easing="easeInOutCubic">
            <img
              loading="lazy"
              key={index}
              src={`/vortex/0${(index % 8) + 1}_transparent.webp`}
              alt={`渦${(index % 8) + 1}`}
              className="absolute pointer-events-none transition-opacity ease-in-out"
              style={{
                transform: `translate(${vortex.x}, ${vortex.y})`,
                width: `${vortex.size}px`,
                zIndex: vortex.zIndex,
                opacity: vortex.opacity,
                transitionDuration: `${vortex.duration}ms`,
                transitionProperty: "opacity, scale",
                scale: vortex.scale,
                rotate: `${vortex.rotate}deg`,
              }}
            />
            // </Parallax>
          ))}
        </div>
      </div>
      <div
        className="h-screen background-blur bg-white bg-opacity-20 overflow-y-scroll overflow-x-hidden relative"
        ref={linkDivRef}
      >
        <div className="p-3">
          <div className="max-w-md mx-auto py-12">
            <div className="flex flex-col gap-3 justify-center items-center">
              <img
                src="tedxutsukuba.webp"
                alt="TEDxUTsukuba"
                className="w-[60%] mx-auto max-w-md"
              />
              <h1 className="text-5xl font-bold text-center font-serif text-slate-800">
                万華鏡
              </h1>
            </div>
            <div className="py-12">
              <div className="grid grid-cols-2 gap-3">
                <Link href="https://www.tedxutsukuba.com/">
                  <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-3 h-full flex flex-col justify-center items-center border-2 border-slate-100">
                    <div className="flex gap-3 flex-col justify-center items-center">
                      <MdTranslate className="text-5xl text-slate-800" />
                      <p className="text-2xl font-bold text-center text-slate-800">
                        翻訳
                      </p>
                    </div>
                  </div>
                </Link>
                <Link href="https://www.tedxutsukuba.com/">
                  <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-3 h-full flex flex-col justify-center items-center border-2 border-slate-100">
                    <div className="flex gap-3 flex-col justify-center items-center h-full">
                      <img
                        src="CSLogo.svg"
                        alt="Comment Screen"
                        className="w-10 mx-auto"
                      />
                      <div className="flex gap-3 flex-col justify-end items-end flex-1">
                        <p className="text-lg font-bold text-center text-slate-800">
                          Comment Screen
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href="https://www.tedxutsukuba.com/">
                  <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-3 h-full flex flex-col justify-center items-center border-2 border-slate-100">
                    <div className="flex flex-col justify-center items-center">
                      <MdOutlineAssignment className="text-5xl text-slate-800" />
                      <p className="text-xl font-bold text-center text-slate-800">
                        アンケート
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
