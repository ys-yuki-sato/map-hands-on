'use client'
import { useState } from "react"
import Map, {Source, Layer} from 'react-map-gl'
import maplibregl from 'maplibre-gl';
import CircleMapLibre from "./CircleMapLibre";

// 地図部分のコンポーネント
function MapMapLibre(props) {

  // marker setting

  // 緯度経度は愛知県庁のもの
  const [lat] = useState(35.18028)
  const [lng] = useState(136.90667)
  const [zoom] = useState(13)

  const initialViewState={
    longitude: lng,
    latitude: lat,
    zoom: zoom,
  }

  // const circleLayer = {
  //   id: "circle",
  //   type: "circle",
  //   source: "mapLib",
  //   "source-layer": "GISMap",
  //   paint: {
  //     'circle-color': 'yellow',
  //     'circle-opacity': 0.3,
  //     'circle-radius': 10000
  //   }
  // }

  // const polygonLayer = {
  //   id: "polygon",
  //   type: "fill",
  //   source: "GISMap",
  //   paint: {
  //     "fill-color": "red"
  //   }
  // }

  const tSource = {
    "type": "geojson",
    'data': {
      'type': 'Feature',
      'geometry': {
        'type': 'Polygon',
        'coordinates': [
          [
            [-67.13734351262877, 45.137451890638886],
            [-66.96466, 44.8097],
            [-68.03252, 44.3252],
            [-69.06, 43.98],
            [-70.11617, 43.68405],
            [-70.64573401557249, 43.090083319667144],
            [-70.75102474636725, 43.08003225358635],
            [-70.79761105007827, 43.21973948828747],
            [-70.98176001655037, 43.36789581966826],
            [-70.94416541205806, 43.46633942318431],
            [-71.08482, 45.3052400000002],
            [-70.6600225491012, 45.46022288673396],
            [-70.30495378282376, 45.914794623389355],
            [-70.00014034695016, 46.69317088478567],
            [-69.23708614772835, 47.44777598732787],
            [-68.90478084987546, 47.184794623394396],
            [-68.23430497910454, 47.35462921812177],
            [-67.79035274928509, 47.066248887716995],
            [-67.79141211614706, 45.702585354182816],
            [-67.13734351262877, 45.137451890638886]
          ]
        ]
      }  
    }
  }

  const tLayer = {
    id: "tLayer",
    type: "fill",
    source: "tSource",
    "source-layer": "tSource",
    layout: {},
    paint: {
      "fill-color": "red"
    }
  }

  // const {className, mapStyle} = props
  // console.log("props", props)

  console.log("Map ", Map)

  return (
    <>
      {/* <Map
        className = {className}
        initialViewState={initialViewState}
        mapLib={maplibregl}
        style={{width: '100vw', height: '100vh'}}
        mapStyle={mapStyle}
        onClick={console.log("tSource: ", tSource)}
      > */}
      <Map
        className="OSM"
        initialViewState={initialViewState}
        mapLib={maplibregl}
        style={{width: '100vw', height: '100vh'}}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL"
      >
        <Source {...tSource}>
          <Layer {...tLayer} />
        </Source>
      </Map>
    </>
  )
}

export default MapMapLibre