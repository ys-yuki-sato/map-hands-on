"use client";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useEffect, useRef } from "react";

const Map = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
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
          lakebiwa: {
            type: "image",
            url: "./lakebiwa.jpg",
            coordinates: [
              [135.596438368833077, 35.5498836025608185], // 左上
              [136.5823028110609414, 35.5498836025608185], // 右上
              [136.5823028110609414, 34.9281476305997742], // 右下
              [135.596438368833077, 34.9281476305997742], // 左下
            ],
          },
        },
        layers: [
          {
            id: "osm-layer",
            source: "osm",
            type: "raster",
          },
          {
            id: "lakebiwa-layer",
            source: "lakebiwa",
            type: "raster",
            paint: {
              "raster-opacity": 0.7,
            },
          },
        ],
      },
      center: [136.0881, 35.2406],
      zoom: 9,
    });
  }, []);

  return (
    <>
      <div className="h-full" ref={mapContainer} />
    </>
  );
};

export default Map;
