import { Polygon, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

// leafletで線分を描画する
function DrawPolygon() {
  const polygon = [
    [35.36, 138.7307908],
    [35.35, 138.74],
    [35.34, 138.72],
  ]
  
  return (
    <Polygon pathOptions={{color: 'blue'}} positions={polygon} >
      <Popup>
        I am a Polygon!
      </Popup>
    </Polygon>
  )
}

export default DrawPolygon
