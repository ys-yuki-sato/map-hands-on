"use client";
import { icon } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
const ICON = icon({
  iconUrl: "/marker-icon.png",
  // iconUrl: '/ia4.jpg'
});

const Map = () => {
  // 経緯度（10進数）-> 田町駅
  const position = [35.6441418, 139.7487384];
  // 初期マップズームレベル
  const zoom = 13;
  return (
    <MapContainer
      center={position}
      zoom={zoom}
      scrollWheelZoom={true}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={ICON} position={position}>
        <Popup>田町駅</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
