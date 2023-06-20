"use client";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useEffect, useRef } from "react";

const Map = () => {
  const mapContainer = useRef(null);


  useEffect(() => {
    // タイルのURLがhttpからはじまるフルパスの必要があるため。
    const path = location.href.replace("/manyShapes-maplibre", "")

    if (!mapContainer.current) return; //stops map from intializing more than once  
    let map = new maplibregl.Map({
      container: mapContainer.current,
      customAttribution:
        '<a href="https://maps.gsi.go.jp/development/ichiran.html">地理院タイル</a>',
      style: {
        version: 8,
        sources: {
          osm: {
            type: "raster",
            tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            tileSize: 256,
            maxzoom: 18,
            attribution:
              '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          },
          polygon: {
            type: "geojson",
            data: `${path}/stub/A16-15_13_DID.geojson`,
            attribution:
            '&copy; <a href="http://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-A26-v2_3.html">国土数値情報 - 人口集中地区データ</a> contributors',
          },
          line: {
            type: "geojson",
            data: `${path}/stub/N02-22_RailroadSection.geojson`,
            attribution:
            '&copy; <a href="http://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-N02-v3_0.html">国土数値情報 - 鉄道データ</a> contributors',
          },
          // admin: {
          //   type: "vector",
          //   tiles: [`${path}/tiles/{z}/{x}/{y}.pbf`],
          //   maxzoom: 8
          // }
        },
        layers: [
          {
            id: "osm-layer",
            source: "osm",
            type: "raster",
          },
          {
            id: "polygon-layer",
            source: "polygon",
            type: "fill",
            paint: {
              // leafletと同様な色表現とする設定
              "fill-color": [
                "rgba", 255,0,0 ,
                ["min", 1, ["/", ["/", ["get", "人口"], ["get", "面積"]], 20000 ]]
              ]
            }
          },
          {
            id: "line-layer",
            source: "line",
            type: "line",
            paint: {
              // leafletと同様な色表現とする設定
              "line-color": [
                "case",
                ["==", ["get", "N02_002"], "1"], "green",
                ["==", ["get", "N02_002"], "2"], "#00f",
                ["==", ["get", "N02_002"], "3"], "#ff0000",
                ["==", ["get", "N02_002"], "4"], "#ffaa00",
                ["==", ["get", "N02_002"], "5"], "#aa00ff",
                "#000000"
              ],
              "line-width": [
                "case",
                ["==", ["get", "N02_002"], "1"], 10,
                ["==", ["get", "N02_002"], "2"], 7,
                ["==", ["get", "N02_002"], "3"], 4,
                ["==", ["get", "N02_002"], "4"], 4,
                ["==", ["get", "N02_002"], "5"], 4,
                0
              ]
            },
            layout: {
              "line-cap": "round"
            }
          },
          // {
          //   id: "admin-layer",
          //   source: "admin", //sourcesから、このlayerで使用するデータのkey
          //   "source-layer": "admin", //ベクトルタイル内のレイヤー名を指定
          //   type: "fill", //ポリゴン
          //   paint: {
          //     "fill-color": "#fa0",
          //     "fill-opacity": 0.5,
          //     "fill-outline-color": "#00f"
          //   }
          // }
        ],
      },
      center: [136.0881, 35.2406],
      zoom: 10,
    });

    // クリックで自治体名表示
    map.on("click", (e) => {
      // admin-layerから地物取得
      const features = map.queryRenderedFeatures((e.point, {
        layers: ["admin-layer"]
      }))
      
      // 地物が存在しない場合は処理終了
      if(features.length === 0) return
      const feature = features[0]
      alert(
        //市町村コード：都道府県市町村名
        `${feature.properties.N03_007}: ${feature.properties.N03_001}${feature.properties.N03_004}`
        ) 
    })
    

  }, []);
  
  return (
    <>
      <div className="h-full" ref={mapContainer} />
    </>
  );
};

export default Map;
