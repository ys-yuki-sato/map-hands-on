import { LayersControl, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

// 背景地図の表示制御を行う
const LayerControl = () => {
  return (
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
      </LayersControl>
  )
}

export default LayerControl