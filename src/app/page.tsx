"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MdPeople, MdTranslate } from "react-icons/md";
import { MdOutlineAssignment } from "react-icons/md";

export default function Home() {
  return (
    <main className="min-h-screen bg-station-tile font-sans text-slate-900">
      <div className="max-w-md mx-auto min-h-screen flex flex-col relative">
        {/* Station Header Style */}
        <div className="p-4">
          <div className="bg-gray-300 p-2 rounded-lg shadow-lg border-2 border-gray-400">
            <div
              className="bg-white p-4 rounded flex flex-col gap-2 justify-center items-center cursor-pointer shadow-inner"
              onClick={() => window.location.reload()}
            >
              <img
          src="keyvisual_2025.webp"
          alt="TEDxUTsukuba 2025"
          className="w-full max-w-xs object-contain"
              />
              <div className="bg-black text-yellow-400 px-4 py-1 font-bold text-sm tracking-widest uppercase rounded-full border-2 border-gray-200">
          Station Entrance
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area - Station Signage Style */}
        <div className="flex-1 p-6 flex flex-col gap-6">
          {/* Signage Container */}
          <div className="flex flex-col gap-4">
            {/* Sign 1: Translation */}
            <Link
              href="https://script.tedxutsukuba.com/conference/shihatsu"
              className="group"
            >
              <div className="bg-white border-4 border-slate-800 rounded-lg p-4 flex items-center gap-4 shadow-[4px_4px_0px_0px_rgba(30,41,59,1)] transition-transform active:translate-y-1 active:shadow-none hover:-translate-y-0.5">
                <div className="bg-blue-600 text-white p-3 rounded-md flex-shrink-0">
                  <MdTranslate className="text-3xl" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-slate-500 mb-0.5">
                    Track 1
                  </p>
                  <p className="text-lg font-black text-slate-800 leading-tight">
                    翻訳 / Translation
                  </p>
                </div>
                <div className="text-slate-400 font-bold text-2xl group-hover:text-slate-800 transition-colors">
                  &gt;
                </div>
              </div>
            </Link>

            {/* Sign 2: CommentScreen */}
            <Link
              href="https://www.commentscreen.com/comments?id=WOG11Xi9z6YT3RsPwSPY"
              className="group"
            >
              <div className="bg-white border-4 border-slate-800 rounded-lg p-4 flex items-center gap-4 shadow-[4px_4px_0px_0px_rgba(30,41,59,1)] transition-transform active:translate-y-1 active:shadow-none hover:-translate-y-0.5">
                <div className="bg-green-600 text-white p-3 rounded-md flex-shrink-0 w-[54px] h-[54px] flex items-center justify-center">
                  <img
                    src="CSLogo.svg"
                    alt="CS"
                    className="w-8 h-8 brightness-0 invert"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-slate-500 mb-0.5">
                    Track 2
                  </p>
                  <p className="text-lg font-black text-slate-800 leading-tight">
                    CommentScreen
                  </p>
                </div>
                <div className="text-slate-400 font-bold text-2xl group-hover:text-slate-800 transition-colors">
                  &gt;
                </div>
              </div>
            </Link>

            {/* Sign 3: Questionnaire */}
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSd-OkAlFT3iQAuaNdfUJz3r3AUwlddxRrYQ_YF0xzqbyK9RuA/viewform?usp=dialog"
              className="group"
            >
              <div className="bg-white border-4 border-slate-800 rounded-lg p-4 flex items-center gap-4 shadow-[4px_4px_0px_0px_rgba(30,41,59,1)] transition-transform active:translate-y-1 active:shadow-none hover:-translate-y-0.5">
                <div className="bg-red-600 text-white p-3 rounded-md flex-shrink-0">
                  <MdOutlineAssignment className="text-3xl" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-slate-500 mb-0.5">
                    Track 3
                  </p>
                  <p className="text-lg font-black text-slate-800 leading-tight">
                    アンケート
                    <span className="block text-sm font-bold text-slate-600">
                      Event Questionnaire
                    </span>
                  </p>
                </div>
                <div className="text-slate-400 font-bold text-2xl group-hover:text-slate-800 transition-colors">
                  &gt;
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Footer Decoration */}
        <div className="bg-slate-800 p-2 text-center">
          <div className="inline-block border-2 border-white px-3 py-1 rounded text-white text-xs font-mono">
            TEDxUTsukuba Station
          </div>
        </div>
      </div>
    </main>
  );
}
