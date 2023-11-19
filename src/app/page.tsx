"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { MdTranslate } from "react-icons/md";
import { MdOutlineAssignment } from "react-icons/md";
import { Parallax, useParallax } from "react-scroll-parallax";

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

  const parallaxLinkVortex01 = useParallax<HTMLImageElement>({
    rotate: [0, 10],
  });
  const parallaxLinkVortex02 = useParallax<HTMLImageElement>({
    rotate: [10, 0],
  });
  const parallaxLinkVortex03 = useParallax<HTMLImageElement>({
    rotate: [0, 10],
  });

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
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="relative">
          {/* 渦画像たち */}
          {vortexPositions.map((vortex, index) => (
            // <Parallax key={index} speed={vortex.speed} easing="easeInOutCubic">
            <img
              key={index}
              src={`/vortex/0${(index % 8) + 1}_transparent.png`}
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
                src="tedxutsukuba.png"
                alt="TEDxUTsukuba"
                className="w-[60%] mx-auto max-w-md"
              />
              <h1 className="text-5xl font-bold text-center font-serif text-slate-800">
                万華鏡
              </h1>
            </div>
            <div className="py-12">
              <div className="flex justify-start">
                <div className="relative w-[70%]">
                  <Link href="https://www.tedxutsukuba.com/">
                    <img
                      ref={parallaxLinkVortex01.ref}
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
                  </Link>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="relative w-[70%]">
                  <Link href="https://www.tedxutsukuba.com/">
                    <img
                      ref={parallaxLinkVortex02.ref}
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
                  </Link>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="relative w-[70%]">
                  <Link href="https://www.tedxutsukuba.com/">
                    <img
                      ref={parallaxLinkVortex03.ref}
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
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
