'use client'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useState } from "react"
import Leaflet from "leaflet"
import icon from "leaflet/dist/images/marker-icon.png"
import HazardMapLayer from './HazardMapLayer'
import EvacuationSiteLayer from './EvacuationSiteLayer'
import DefaultMarker from './DefaultMarker'
import BoundsComponent from './BoundsCompenent'
import MinDistLine from './MinDistLine'

// 地図部分のコンポーネント
function Map(props) {
  // marker setting
  let DefaultIcon = Leaflet.icon({
    iconUrl: icon,
    iconAnchor: [12, 41], // アイコンのとがった位置をクリックした場所に合わせるためのオフセット
    popupAnchor: [0, -32], // ポップアップの位置も合わせて調整
  })
  Leaflet.Marker.prototype.options.icon = DefaultIcon

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
      <MinDistLine />
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