import Link from "next/link";

export default function Home() {
  return (
    <main className="background-image">
      <div className="background-blur min-h-screen p-3">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold text-center font-serif py-12">
            万華鏡
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="https://www.tedxutsukuba.com/"
              className="bg-white rounded-lg shadow-lg p-4"
            >
              <h2 className="text-xl font-bold mb-2">公式HP</h2>
              <p className="text-gray-700 text-base">
                TEDxUtsukubaの公式ホームページ
              </p>
            </Link>
            <Link
              href="https://tedxutsukuba2023.peatix.com/view"
              className="bg-white rounded-lg shadow-lg p-4"
            >
              <h2 className="text-xl font-bold mb-2">Peatix</h2>
              <p className="text-gray-700 text-base">
                イベント参加登録ページはこちら
              </p>
            </Link>
            <Link
              href="https://twitter.com/tedxutsukuba"
              className="bg-white rounded-lg shadow-lg p-4"
            >
              <h2 className="text-xl font-bold mb-2">Twitter</h2>
              <p className="text-gray-700 text-base">公式Twitter</p>
            </Link>
            <Link
              href="https://www.instagram.com/tedxutsukuba/"
              className="bg-white rounded-lg shadow-lg p-4"
            >
              <h2 className="text-xl font-bold mb-2">Instagram</h2>
              <p className="text-gray-700 text-base">公式Instagram</p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
