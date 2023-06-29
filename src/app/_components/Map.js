'use client'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useState } from "react"
import Leaflet from "leaflet"
import HazardMapLayer from './HazardMapLayer'
import EvacuationSiteLayer from './EvacuationSiteLayer'
import DefaultMarker from './DefaultMarker'
import BoundsComponent from './BoundsCompenent'


// 地図部分のコンポーネント
function Map(props) {
  // 緯度経度は東京都庁のもの
  const [lat, ] = useState(35.689481)
  const [lng, ] = useState(139.691686)
  const [zoom, ] = useState(13)
  const [position, ] = useState({
    lat: lat,
    lng: lng
  })

  const {className, attribution, url} = props

  return (
    <MapContainer className = {className} center = {position} zoom = {zoom} scrollWheelZoom = {false} >
      <BoundsComponent />
      <DefaultMarker position = {position} />
      <TileLayer
        attribution = {attribution}
        url = {url}
      />
      <HazardMapLayer />
      <EvacuationSiteLayer />
    </MapContainer>
  )
}

export default Map