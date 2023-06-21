import Link from "next/link";
import React from "react";

export default function Home() {

  return (
    <>
      <div className="pb-2">
        <Link href={"/pin"} className="underline text-blue-800">
          地図にピンを立てる
        </Link>
      </div>
      <div className="pb-2">
        <Link href={"/manyPin"} className="underline text-blue-800">
          地図に多くのピンを立てる
        </Link>
      </div>
      <div className="pb-2">
        <Link href={"/tooManyPin"} className="underline text-blue-800">
          地図にもっと多くのピンを立てる
        </Link>
      </div>
      <div className="pb-2">
        <Link href={'/shapes-leaflet'} className="underline text-blue-800">地図上に図形を表示する（Leaflet）</Link>
      </div>
      <div className="pb-2">
        <Link href={'/manyShapes-leaflet'} className="underline text-blue-800">地図上に多くの図形を表示する（Leaflet）</Link>
      </div>
      <div className="pb-2">
        <Link href={'/manyShapes-maplibre'} className="underline text-blue-800">地図上に図形を表示する（MapLibre GL）</Link>
      </div>
      <div className="pb-2">
        <Link href={"/image-leaflet"} className="underline text-blue-800">
          地図上に画像を表示する（Leaflet）
        </Link>
      </div>
      <div className="pb-2">
        <Link href={"/image-maplibre"} className="underline text-blue-800">
          地図上に画像を表示する（MapLibre GL）
        </Link>
      </div>
    </>
  );
}
