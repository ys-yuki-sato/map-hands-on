import { LayersControl, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

// GeoJson形式の地物の描画を行う
function GeoJsonLayersControlOverlay(props) {
  const {name, data, filter, onEachFeature} = props
  return (
    <LayersControl.BaseLayer name = {name}>
      <GeoJSON
        data = {data}
        filter = {filter}
        style={() => ({
          color: '#4a83ec',
          weight: 0.5,
          fillColor: "#1a1d62",
          fillOpacity: 1,
        })}
        onEachFeature = {onEachFeature}
      />
    </LayersControl.BaseLayer>
  )
}

export default GeoJsonLayersControlOverlay