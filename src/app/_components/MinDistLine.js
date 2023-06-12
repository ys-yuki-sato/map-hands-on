import { Marker, Polyline, Popup, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useState } from 'react'
import L from "leaflet"
import distance from '@turf/distance'


// 現在地と最寄りの地物との間にラインを引くコンポーネント
function MinDistLine() {

  L.Icon.Default.imagePath = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/'

  const [position, setPosition] = useState(null)
  let nearestFeature = null;
  let line = null;

  // 最寄りの地物を返却するメソッド
  const getNearestFeature = (lng, lat, layer) => {
    // 現在表示中の指定緊急避難場所の地物を取得する
    const features = layer._layers
    let minDistFeature = null;
    // 最寄りの地物を見つける 
    for (const key in features) {
      const dist = distance(
        [lng, lat],
        features[key].feature.geometry.coordinates
      )
      if (minDistFeature === null || minDistFeature.properties.dist > dist) {
        minDistFeature = {
          ...features[key],
          properties: {
            ...features[key].properties,
            dist,
          },
        };
      }
    }
    // 最寄りの地物を返却
    return minDistFeature.feature.geometry.coordinates;;
  }

  // 地図クリック時のイベント
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      // 現在地に飛ばす用  
      setPosition(e.latlng)
      map.flyTo(e.latlng, 9)
      const radius = e.accuracy;
      const circle = L.circle(e.latlng, radius);
      circle.addTo(map);
    }
  });

  // 現在表示レイヤー取得&最寄りの地物取得用
  map.eachLayer((layer) => {
    if (layer instanceof L.GeoJSON) {
      nearestFeature = getNearestFeature(position.lng, position.lat, layer);
      // ライン描画
      line = [
        [position.lat, position.lng],
        [nearestFeature[1], nearestFeature[0]]
      ]
    }
  });

  return position === null ? null : (
    <>
      <Marker position={position}>
        <Popup>
          現在地
        </Popup>
      </Marker>
      {line && <Polyline pathOptions={{ color: 'blue', opacity: 0.7 }} positions={line} />}
    </>
  );

}

export default MinDistLine