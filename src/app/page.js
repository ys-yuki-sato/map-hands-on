import dynamic from "next/dynamic";
import React from "react";

export default function Home() {
  const Map = React.useMemo(
    () =>
      dynamic(() => import("./_components/Map"), {
        ssr: false,
      }),
    []
  );

  return (
    <div className = "top">
      <div className = "mapArea">
        {/* 背景地図として国土地理院タイルを使用 */}
        <Map className = 'GISMap' attribution = '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>' url = 'https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png' />
        {/* 背景地図としてOpenStreetMapを使用 */}
        <Map className = 'OSMMap' attribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      </div>
    </div>
  )
}
