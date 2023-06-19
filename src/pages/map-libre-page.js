import dynamic from "next/dynamic";
import Link from "next/link"
import React from "react";
import MapMapLibre from "@/app/_components/MapMapLibre";
import Test from "@/app/_components/Test";


export default function MapLibre(){
  const Test = React.useMemo(
    () =>
      dynamic(() => import("../app/_components/Test"), {
        ssr: false,
      }),
    []
  );

  
  return(
    <div className = "top">
      <h1>MapLibre</h1>
      <div className = "mapArea">
        {/* 背景地図として国土地理院地図ベクターを使用 */}
        <h1>国土地理院ベクター</h1>
        <MapMapLibre className = 'GISMap' mapStyle = 'https://gsi-cyberjapan.github.io/gsivectortile-mapbox-gl-js/std.json' />
        {/* 背景地図としてOpenStreetMapベクトルタイルを使用 */}
        <br />
        <h1>OpenStreetMapベクトルタイル</h1>
        <MapMapLibre className = 'OSMMap' mapStyle = 'https://tile.openstreetmap.jp/styles/osm-bright-ja/style.json' />
      </div>
      {/* <Link href="/">
        go back to top
      </Link> */}
    </div>
    // <Test />
  )
}