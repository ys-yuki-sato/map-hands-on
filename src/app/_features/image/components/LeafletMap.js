"use client";
import { icon, LatLngBounds } from "leaflet";
import {
  ImageOverlay,
  MapContainer,
  TileLayer,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const LeafletMap = () => {
  // 経緯度（10進数）-> 富士山
  const position = [35.3627808, 138.7307908];
  // 初期マップズームレベル
  const zoom = 12;
  return (
    <MapContainer
      center={position}
      zoom={zoom}
      scrollWheelZoom={true}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
        url="https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png"
      />
      <ImageOverlay
        url="/mtfuji.jpg"
        bounds={
          new LatLngBounds([
            [35.2906143398424206, 138.6212919295209929],
            [35.4299751815481514, 138.8426007912885041],
          ])
        }
        opacity={0.7}
      />
    </MapContainer>
  );
};

export default LeafletMap;
