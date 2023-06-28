import { LayersControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import mergeFromCity from "../../../mergeFromCity.json"
import ReactDOMServer from 'react-dom/server'
import GeoJsonLayersControlOverlay from "./GeoJsonLayersControlOverlay"

// 指定緊急避難所の表示制御を行う
function EvacuationSiteLayer() {
  return (
    <LayersControl position="topright" collapsed={false}>
      <GeoJsonLayersControlOverlay 
        name = '指定緊急避難所（洪水）'
        data = {mergeFromCity}
        filter = {mergeFloodFilter}
        onEachFeature = {onEachPolygonFeature}
      />
      <GeoJsonLayersControlOverlay 
        name = '指定緊急避難所（崖崩れ、土石流及び地滑り）'
        data = {mergeFromCity}
        filter = {mergeDebrisFlowFilter}
        onEachFeature = {onEachPolygonFeature}
      />
      <GeoJsonLayersControlOverlay 
        name = '指定緊急避難所（高潮）'
        data = {mergeFromCity}
        filter = {mergeHighTideFilter}
        onEachFeature = {onEachPolygonFeature}
      />
      <GeoJsonLayersControlOverlay 
        name = '指定緊急避難所（地震）'
        data = {mergeFromCity}
        filter = {mergeEarthQuakeFilter}
        onEachFeature = {onEachPolygonFeature}
      />
      <GeoJsonLayersControlOverlay 
        name = '指定緊急避難所（津波）'
        data = {mergeFromCity}
        filter = {mergeTsunamiFilter}
        onEachFeature = {onEachPolygonFeature}
      />
      <GeoJsonLayersControlOverlay 
        name = '指定緊急避難所（大規模な火事）'
        data = {mergeFromCity}
        filter = {mergeFireFilter}
        onEachFeature = {onEachPolygonFeature}
      />
      <GeoJsonLayersControlOverlay 
        name = '指定緊急避難所（内水氾濫）'
        data = {mergeFromCity}
        filter = {mergeInlandFloodFilter}
        onEachFeature = {onEachPolygonFeature}
      />
      <GeoJsonLayersControlOverlay 
        name = '指定緊急避難所（火山現象）'
        data = {mergeFromCity}
        filter = {mergeVolcanicPhenomenonFilter}
        onEachFeature = {onEachPolygonFeature}
      />
    </LayersControl>
  )
}

function mergeFloodFilter(feature) {
  if (feature.properties.disaster1) return true
}

function mergeDebrisFlowFilter(feature) {
  if (feature.properties.disaster2) return true
}

function mergeHighTideFilter(feature) {
  if (feature.properties.disaster3) return true
}

function mergeEarthQuakeFilter(feature) {
  if (feature.properties.disaster4) return true
}

function mergeTsunamiFilter(feature) {
  if (feature.properties.disaster5) return true
}

function mergeFireFilter(feature) {
  if (feature.properties.disaster6) return true
}

function mergeInlandFloodFilter(feature) {
  if (feature.properties.disaster7) return true
}

function mergeVolcanicPhenomenonFilter(feature) {
  if (feature.properties.disaster8) return true
}


function onEachPolygonFeature(feature, layer) {
  const fp = feature.properties
  const locationName = (fp && fp.name) ? decodeURIComponent(fp.name) : '-'
  const address = (fp && fp.address) ? decodeURIComponent(fp.address) : '-'
  const element = (
    <div>
      <p className = 'locationName'>{locationName}</p> 
      <p>{address}</p>
      <p>
        <span className = {fp.disaster1 ? '' : 'evacuationNG'}>洪水</span> /
        <span className = {fp.disaster2 ? '' : 'evacuationNG'}> 崖崩れ、土石流及び地滑り</span> /
        <span className = {fp.disaster3 ? '' : 'evacuationNG'}> 高潮</span> /
        <span className = {fp.disaster4 ? '' : 'evacuationNG'}> 地震</span> /
        <span className = {fp.disaster5 ? '' : 'evacuationNG'}> 津波</span> /
        <span className = {fp.disaster6 ? '' : 'evacuationNG'}> 大規模な火事</span> /
        <span className = {fp.disaster7 ? '' : 'evacuationNG'}> 内水氾濫</span> /
        <span className = {fp.disaster8 ? '' : 'evacuationNG'}> 火山現象</span> /
      </p>
    </div>
  )
  layer.bindPopup(`${ReactDOMServer.renderToString(element)}`, {
    maxHeight: 450,
  })
}

export default EvacuationSiteLayer