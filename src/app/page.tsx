"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MdPeople, MdTranslate } from "react-icons/md";
import { MdOutlineAssignment } from "react-icons/md";
import { FaInstagram, FaFacebook, FaGlobe } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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

          {/* SNS Links */}
          <div className="flex justify-center gap-8">
            <Link
              href="https://www.instagram.com/tedxutsukuba/"
              target="_blank"
              className="text-slate-600 hover:text-[#E1306C] transition-colors"
            >
              <FaInstagram className="text-4xl" />
            </Link>
            <Link
              href="https://twitter.com/TEDxUTsukuba"
              target="_blank"
              className="text-slate-600 hover:text-black transition-colors"
            >
              <FaXTwitter className="text-4xl" />
            </Link>
            <Link
              href="https://www.facebook.com/TEDxUTsukuba"
              target="_blank"
              className="text-slate-600 hover:text-[#1877F2] transition-colors"
            >
              <FaFacebook className="text-4xl" />
            </Link>
            <Link
              href="https://tedxutsukuba.com/"
              target="_blank"
              className="text-slate-600 hover:text-[#E62B1E] transition-colors"
            >
              <FaGlobe className="text-4xl" />
            </Link>
          </div>

          {/* Partners List */}
          <div className="bg-white border-4 border-slate-800 rounded-lg p-6 shadow-[4px_4px_0px_0px_rgba(30,41,59,1)]">
            <h2 className="text-2xl font-black text-slate-800 text-center mb-6 border-b-4 border-slate-800 pb-2">
              PARTNERS
            </h2>

            <div className="flex flex-col gap-8">
              {/* Platinum */}
              <div className="text-center">
                <h3 className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-widest">
                  Platinum
                </h3>
                <div className="flex flex-wrap justify-center gap-6">
                  <div className="flex flex-col items-center gap-2 w-full max-w-[240px]">
                    <div className="aspect-square w-full bg-white rounded-lg border border-slate-200 flex items-center justify-center p-4 shadow-sm">
                      <img
                        src="/company/buddycom.jpg"
                        alt="Buddycom"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-sm font-bold text-slate-800">
                      Buddycom
                      <br />
                      （株式会社サイエンスアーツ）
                    </span>
                    <Link
                      href="https://buddycom.net/?utm_source=partner-site&utm_medium=referral&utm_campaign=sponsor"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-200 hover:bg-slate-300 text-slate-700 px-3 py-1 rounded text-xs font-bold transition-colors"
                    >
                      HP
                    </Link>
                  </div>
                  <div className="flex flex-col items-center gap-2 w-full max-w-[240px]">
                    <div className="aspect-square w-full bg-white rounded-lg border border-slate-200 flex items-center justify-center p-4 shadow-sm">
                      <img
                        src="/company/tokium.jpg"
                        alt="株式会社TOKIUM"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-sm font-bold text-slate-800">
                      株式会社TOKIUM
                    </span>
                    <Link
                      href="https://corp.tokium.jp/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-200 hover:bg-slate-300 text-slate-700 px-3 py-1 rounded text-xs font-bold transition-colors"
                    >
                      HP
                    </Link>
                  </div>
                </div>
              </div>

              {/* Silver */}
              <div className="text-center">
                <h3 className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-widest">
                  Silver
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="flex flex-col items-center gap-2 w-[calc(50%-0.5rem)]">
                    <div className="aspect-square w-full bg-white rounded-lg border border-slate-200 flex items-center justify-center p-3 shadow-sm">
                      <img
                        src="/company/yugo.jpg"
                        alt="株式会社ユーゴー"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-xs font-bold text-slate-800">
                      株式会社ユーゴー
                    </span>
                    <Link
                      href="https://www.u-go.jp/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-200 hover:bg-slate-300 text-slate-700 px-3 py-1 rounded text-xs font-bold transition-colors"
                    >
                      HP
                    </Link>
                  </div>
                </div>
              </div>

              {/* Standard */}
              <div className="text-center">
                <h3 className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-widest">
                  Standard
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                  <div className="flex flex-col items-center gap-2 w-[calc(33.3%-0.5rem)]">
                    <div className="aspect-square w-full bg-white rounded-lg border border-slate-200 flex items-center justify-center p-2 shadow-sm">
                      <img
                        src="/company/thfes.jpg"
                        alt="THFes."
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-[10px] font-medium text-slate-800 leading-tight">
                      THFes.
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-2 w-[calc(33.3%-0.5rem)]">
                    <div className="aspect-square w-full bg-white rounded-lg border border-slate-200 flex items-center justify-center p-2 shadow-sm">
                      <img
                        src="/company/accel.jpg"
                        alt="株式会社アクセル"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-[10px] font-medium text-slate-800 leading-tight">
                      株式会社アクセル
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-2 w-[calc(33.3%-0.5rem)]">
                    <div className="aspect-square w-full bg-white rounded-lg border border-slate-200 flex items-center justify-center p-2 shadow-sm">
                      <img
                        src="/company/daiwahouse.jpg"
                        alt="大和ハウス工業株式会社"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-[10px] font-medium text-slate-800 leading-tight">
                      大和ハウス工業株式会社
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-2 w-[calc(33.3%-0.5rem)]">
                    <div className="aspect-square w-full bg-white rounded-lg border border-slate-200 flex items-center justify-center p-2 shadow-sm">
                      <img
                        src="/company/simplex.jpg"
                        alt="シンプレクス・ホールディングス株式会社"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-[10px] font-medium text-slate-800 leading-tight">
                      シンプレクス・ホールディングス株式会社
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-2 w-[calc(33.3%-0.5rem)]">
                    <div className="aspect-square w-full bg-white rounded-lg border border-slate-200 flex items-center justify-center p-2 shadow-sm">
                      <img
                        src="/company/seirokuya.jpg"
                        alt="有限会社コン・コース"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-[10px] font-medium text-slate-800 leading-tight">
                      有限会社コン・コース
                      <br />
                      （ラーメン清六家本部）
                    </span>
                  </div>
                </div>
              </div>

              {/* Basic */}
              <div className="text-center">
                <h3 className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-widest">
                  Basic
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                  <div className="flex flex-col items-center gap-2 w-[calc(33.3%-0.5rem)]">
                    <div className="aspect-square w-full bg-white rounded-lg border border-slate-200 flex items-center justify-center p-2 shadow-sm">
                      <img
                        src="/company/applepie.jpg"
                        alt="APPLE PIE ORDER LTD"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-[10px] text-slate-600 leading-tight">
                      APPLE PIE ORDER LTD
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-2 w-[calc(33.3%-0.5rem)]">
                    <div className="aspect-square w-full bg-white rounded-lg border border-slate-200 flex items-center justify-center p-2 shadow-sm">
                      <img
                        src="/company/radiotsukuba.jpg"
                        alt="ラヂオつくば ZEP!!! 842"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-[10px] text-slate-600 leading-tight">
                      ラヂオつくば ZEP!!! 842
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-2 w-[calc(33.3%-0.5rem)]">
                    <div className="aspect-square w-full bg-white rounded-lg border border-slate-200 flex items-center justify-center p-2 shadow-sm">
                      <img
                        src="/company/onorabout.jpg"
                        alt="On or About"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-[10px] text-slate-600 leading-tight">
                      On or About
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-2 w-[calc(33.3%-0.5rem)]">
                    <div className="aspect-square w-full bg-white rounded-lg border border-slate-200 flex items-center justify-center p-2 shadow-sm">
                      <img
                        src="/company/hojskole.jpg"
                        alt="合同会社ホイスコーレの森"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-[10px] text-slate-600 leading-tight">
                      合同会社ホイスコーレの森
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-2 w-[calc(33.3%-0.5rem)]">
                    <div className="aspect-square w-full bg-white rounded-lg border border-slate-200 flex items-center justify-center p-2 shadow-sm">
                      <img
                        src="/company/cyberdyne.jpg"
                        alt="CYBERDYNE株式会社"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-[10px] text-slate-600 leading-tight">
                      CYBERDYNE株式会社
                    </span>
                  </div>
                </div>
              </div>

              {/* In-kind */}
              <div className="text-center">
                <h3 className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-widest">
                  In-kind
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                  <div className="flex flex-col items-center gap-2 w-[calc(33.3%-0.5rem)]">
                    <div className="aspect-square w-full bg-white rounded-lg border border-slate-200 flex items-center justify-center p-2 shadow-sm">
                      <img
                        src="/company/yukai.jpg"
                        alt="ユカイ工学株式会社"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-[10px] text-slate-600 leading-tight">
                      ユカイ工学株式会社
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-2 w-[calc(33.3%-0.5rem)]">
                    <div className="aspect-square w-full bg-white rounded-lg border border-slate-200 flex items-center justify-center p-2 shadow-sm">
                      <img
                        src="/company/numataya.jpg"
                        alt="沼田屋本店"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-[10px] text-slate-600 leading-tight">
                      沼田屋本店
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-2 w-[calc(33.3%-0.5rem)]">
                    <div className="aspect-square w-full bg-white rounded-lg border border-slate-200 flex items-center justify-center p-2 shadow-sm">
                      <img
                        src="/company/tokyofood.jpg"
                        alt="東京フード株式会社"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-[10px] text-slate-600 leading-tight">
                      東京フード株式会社
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-2 w-[calc(33.3%-0.5rem)]">
                    <div className="aspect-square w-full bg-white rounded-lg border border-slate-200 flex items-center justify-center p-2 shadow-sm">
                      <img
                        src="/company/jimmyfarm.jpg"
                        alt="ジミーfarm合同会社"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-[10px] text-slate-600 leading-tight">
                      ジミーfarm合同会社
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-2 w-[calc(33.3%-0.5rem)]">
                    <div className="aspect-square w-full bg-white rounded-lg border border-slate-200 flex items-center justify-center p-2 shadow-sm">
                      <img
                        src="/company/tpirc.jpg"
                        alt="次世代農業研究部門（T-PIRC農場）"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-[10px] text-slate-600 leading-tight">
                      次世代農業研究部門
                      <br />
                      （T-PIRC農場）
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-2 w-[calc(33.3%-0.5rem)]">
                    <div className="aspect-square w-full bg-white rounded-lg border border-slate-200 flex items-center justify-center p-2 shadow-sm">
                      <img
                        src="/company/gateaupuglia.jpg"
                        alt="ガトー・プーリア"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-[10px] text-slate-600 leading-tight">
                      ガトー・プーリア
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-2 w-[calc(33.3%-0.5rem)]">
                    <div className="aspect-square w-full bg-white rounded-lg border border-slate-200 flex items-center justify-center p-2 shadow-sm">
                      <img
                        src="/company/commentscreen.jpg"
                        alt="CommentScreen株式会社"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-[10px] text-slate-600 leading-tight">
                      CommentScreen株式会社
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-2 w-[calc(33.3%-0.5rem)]">
                    <div className="aspect-square w-full bg-white rounded-lg border border-slate-200 flex items-center justify-center p-2 shadow-sm">
                      <img
                        src="/company/oshouyu.jpg"
                        alt="お醤油屋さんのおせんべい本舗"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-[10px] text-slate-600 leading-tight">
                      お醤油屋さんの
                      <br />
                      おせんべい本舗
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-2 w-[calc(33.3%-0.5rem)]">
                    <div className="aspect-square w-full bg-white rounded-lg border border-slate-200 flex items-center justify-center p-2 shadow-sm">
                      <img
                        src="/company/asahi.jpg"
                        alt="朝日印刷株式会社"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-[10px] text-slate-600 leading-tight">
                      朝日印刷株式会社
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-2 w-[calc(33.3%-0.5rem)]">
                    <div className="aspect-square w-full bg-white rounded-lg border border-slate-200 flex items-center justify-center p-2 shadow-sm">
                      <img
                        src="/company/yoshimura.jpg"
                        alt="ヨシムラミート"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-[10px] text-slate-600 leading-tight">
                      ヨシムラミート
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-2 w-[calc(33.3%-0.5rem)]">
                    <div className="aspect-square w-full bg-white rounded-lg border border-slate-200 flex items-center justify-center p-2 shadow-sm">
                      <img
                        src="/company/amici.jpg"
                        alt="TRATTORIA E PIZZERIA AMICI"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-[10px] text-slate-600 leading-tight">
                      TRATTORIA E PIZZERIA AMICI
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-2 w-[calc(33.3%-0.5rem)]">
                    <div className="aspect-square w-full bg-white rounded-lg border border-slate-200 flex items-center justify-center p-2 shadow-sm">
                      <img
                        src="/company/tsukubaham.jpg"
                        alt="有限会社筑波ハム"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-[10px] text-slate-600 leading-tight">
                      有限会社筑波ハム
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Decoration */}
        <div className="bg-slate-800 p-2 text-center">
          <div className="inline-block border-2 border-white px-3 py-1 rounded text-white text-xs font-mono">
            TEDxUTsukuba
          </div>
        </div>
      </div>
    </main>
  );
}
