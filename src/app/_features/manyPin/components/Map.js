"use client";
import { icon } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
const ICON = icon({
  iconUrl: "/marker-icon.png",
});

const Map = async () => {
  // 群馬県の学校データ
  const multiData = await fetch("/stub/P29-21_10.geojson").then((res) => {
    return res.json();
  });

  // 経緯度（10進数）-> 群馬医療福祉大学附属鈴蘭幼稚園
  const position = [36.382472, 139.047735];
  // 初期マップズームレベル
  const zoom = 13;

  return (
    <>
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
        {multiData.features?.map((feature, index) => {
          return (
            <Marker
              icon={ICON}
              position={[
                feature.geometry.coordinates[1],
                feature.geometry.coordinates[0],
              ]}
              key={index}
            >
              <Popup>{feature.properties.P29_004} <br/> {feature.properties.P29_005}</Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </>
  );
};

export default Map;
