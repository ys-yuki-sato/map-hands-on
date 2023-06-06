import { TileLayer, LayersControl} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

// ラスタ形式の地物の描画を行う
function TileLayersControlOverlay(props) {
  const {name, attribution, url} = props
  return (
    <LayersControl.Overlay name={name}>
      <TileLayer
        attribution={attribution}
        url={url}
        opacity={0.6}
      />
    </LayersControl.Overlay>
  )
}

export default TileLayersControlOverlay