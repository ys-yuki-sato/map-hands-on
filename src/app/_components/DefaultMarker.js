import { Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Leaflet from "leaflet"

// 地図の中心に表示されるマーカーのコンポーネント
function DefaultMarker(props) {
  let DefaultIcon = Leaflet.icon({
    iconUrl: "/marker-icon.png" ,
    iconAnchor: [12, 41], // アイコンのとがった位置をクリックした場所に合わせるためのオフセット
    popupAnchor: [0, -32], // ポップアップの位置も合わせて調整
  })
  Leaflet.Marker.prototype.options.icon = DefaultIcon

  return (
    <Marker position={props.position}>
      <Popup>
        緯度:{props.position.lat} <br /> 経度:{props.position.lng}
      </Popup>
    </Marker>
  )
}

export default DefaultMarker