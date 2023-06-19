import React from 'react'
import { Circle, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

// leafletで円を描画する
function DrawCircle() {
  const [showPopup, setShowPopup] = React.useState(true)
  const center = [35.3627808, 138.7307908] // 中心：富士山

  const layerStyle = {
    id: 'point',
    type: 'circle',
    paint: {
      'circle-radius': 1000,
      'circle-color': 'yellow'
    }
  };

  return (
    <Circle 
      center={center} 
      zoom='14'
      radius='1000' 
      fillColor='#ff0000' 
      fillOpacity='0.3' 
      color='yellow' >
      <Popup>
        I am a circle
      </Popup>
    </Circle>
  )
}

export default DrawCircle
