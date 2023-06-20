import { Polyline, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

// leafletで線分を描画する
function PolylineLeaflet() {
  const polyline = [
    [35.36, 138.73],
    [35.37, 138.73],
    [35.37, 138.74],
    [35.38, 138.74],
    [35.39, 138.75],
    [35.37, 138.75],
  ]
  return (
    <Polyline pathOptions={{color:'green'}} positions={polyline} >
      <Popup>
        ポリライン！
      </Popup>
    </Polyline>
  )
}

export default PolylineLeaflet
