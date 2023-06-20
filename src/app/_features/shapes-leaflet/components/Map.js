'use client'
// import { useState } from "react"
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Leaflet from "leaflet"
import CircleLeaflet from './CircleLeaflet'
import PolylineLeaflet from './PolylineLeaflet'
import PolygonLeaflet from './PolygonLeaflet'
import LayerControl from './LayerControl'

// 地図部分のコンポーネント
const Map = () => {
  // 緯度経度は富士山
  const position = [35.36280, 138.73078]; //[lat, lng]
  const zoom = 13

  return (
    <MapContainer 
      center = {position} 
      zoom = {zoom} 
      scrollWheelZoom = {true}
      style={{ height: "100vh", width: "100%" }} 
    >
      <CircleLeaflet />
      <PolylineLeaflet />
      <PolygonLeaflet />
      <LayerControl/>
    </MapContainer>
  )
}

export default Map