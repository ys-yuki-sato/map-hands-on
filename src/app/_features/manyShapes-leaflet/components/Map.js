'use client'
import { MapContainer, TileLayer, LayersControl, GeoJSON} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'


// 地図部分のコンポーネント
const Map = async () => {
  // 東京都の人口集中地区データ
  const population = await fetch("/stub/A16-15_13_DID.geojson")
    .then((res) => res.json());

  // 鉄道データ
  const railRoad = await fetch("/stub/N02-22_RailroadSection.geojson")
  .then((res) => res.json());

  // 事業者種別で色分け
  const colorDict = {
    1: "green",
    2: "blue",
    3: "red",
    4: "orange",
    5: "purple"
  }

  // 事業者種別で先の太さ分け
  const weightDict = {
    1: 10,
    2: 7,
    3: 4,
    4: 4,
    5: 4,
  }

  // 緯度経度は皇居
  const position = [35.68385579682113, 139.7508321]; //[lat, lng]
  const zoom = 10

  return (
    <MapContainer 
      center = {position} 
      zoom = {zoom} 
      scrollWheelZoom = {true}
      style={{ height: "100vh", width: "100%" }} 
    >
      <LayersControl 
        className="mergeControlArea" 
        position="topleft" 
        collapsed={false}
      >
        <LayersControl.BaseLayer checked name="OpenStreetMap" >
          <TileLayer 
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="地理院地図" >
          <TileLayer 
            attribution='&copy; <a href="https://maps.gsi.go.jp/development/ichiran.html">地理院タイル</a> contributors'
            url='https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png'
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="空中写真" >
          <TileLayer 
            attribution='&copy; <a href="https://maps.gsi.go.jp/development/ichiran.html">地理院タイル</a> contributors'
            url="https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg"
          />
        </LayersControl.BaseLayer>
        <LayersControl.Overlay name="人口集中地区">
          <GeoJSON
            data={population}
            style={(feature) => 
              ({
                color: 'red',
                stroke: false,
                fillOpacity: (feature.properties['人口'] / feature.properties['面積'] / 20000),
              })
            }
            onEachFeature={(feature, layer) => {
              layer.bindPopup(()=>{
                return ('人口：'+ layer.feature.properties['人口'])
              });
            }}
          >
          </GeoJSON>
        </LayersControl.Overlay>
        <LayersControl.Overlay name="鉄道事業者">
          <GeoJSON
            data={railRoad}
            style={(feature) => 
              ({
                weight: (weightDict[feature.properties.N02_002]),
                // weight: (weightDict[1]),
                color: (colorDict[feature.properties.N02_002])
                // color: "red"
              })
            }
            onEachFeature={(feature, layer) => {
              layer.bindPopup(()=>{
                return (layer.feature.properties.N02_004 + ": " + layer.feature.properties.N02_003)
              });
            }}
          >
          </GeoJSON>
        </LayersControl.Overlay>

      </LayersControl>
    </MapContainer>
  )
}

export default Map