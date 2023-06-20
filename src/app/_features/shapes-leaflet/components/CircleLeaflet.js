import React from "react"
import { Circle, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"

// leafletで円を描画する
function CircleLeaflet() {
  // 中心：富士山
  const center = [35.3627808, 138.7307908] 
  const radius = 1000
  const popup = "◯  富士山！"

  // //中心：琵琶湖
  // const center = [35.24911, 136.06890] 
  // const radius = 30000
  // const popup = "◯  琵琶湖！"

  return (
    <Circle 
      center={center} 
      zoom="14"
      radius={radius} 
      fillColor="#ff0000" 
      fillOpacity="0.3" 
      color="yellow" >
      <Popup>
        {popup}
      </Popup>
    </Circle>
  )
}

export default CircleLeaflet
