import { LayersControl} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import TileLayersControlOverlay from './TileLayersControlOverlay'

// ハザードマップの表示制御を行う
function HazardMapLayer() {
  return (
      <LayersControl className="mergeControlArea" position="topleft" collapsed={false}>
        <TileLayersControlOverlay 
          name = '洪水浸水想定区域（想定最大規模）'
          attribution='&copy; <a href="https://disaportal.gsi.go.jp/hazardmap/copyright/opendata.html">重ねるハザードマップ</a> contributors'
          url='https://disaportaldata.gsi.go.jp/raster/01_flood_l2_shinsuishin_data/{z}/{x}/{y}.png'
        />
        <TileLayersControlOverlay 
          name = '高潮浸水想定区域'
          attribution='&copy; <a href="https://disaportal.gsi.go.jp/hazardmap/copyright/opendata.html">重ねるハザードマップ</a> contributors'
          url='https://disaportaldata.gsi.go.jp/raster/03_hightide_l2_shinsuishin_data/{z}/{x}/{y}.png'
        />
        <TileLayersControlOverlay 
          name = '津波浸水想定'
          attribution='&copy; <a href="https://disaportal.gsi.go.jp/hazardmap/copyright/opendata.html">重ねるハザードマップ</a> contributors'
          url='https://disaportaldata.gsi.go.jp/raster/04_tsunami_newlegend_data/{z}/{x}/{y}.png'
        />
        <TileLayersControlOverlay 
          name = '土砂災害警戒区域（土石流）'
          attribution='&copy; <a href="https://disaportal.gsi.go.jp/hazardmap/copyright/opendata.html">重ねるハザードマップ</a> contributors'
          url='https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki/{z}/{x}/{y}.png'
        />
        <TileLayersControlOverlay 
          name = '土砂災害警戒区域（急傾斜地の崩壊）'
          attribution='&copy; <a href="https://disaportal.gsi.go.jp/hazardmap/copyright/opendata.html">重ねるハザードマップ</a> contributors'
          url='https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki/{z}/{x}/{y}.png'
        />
        <TileLayersControlOverlay 
          name = '土砂災害警戒区域（地すべり）'
          attribution='&copy; <a href="https://disaportal.gsi.go.jp/hazardmap/copyright/opendata.html">重ねるハザードマップ</a> contributors'
          url='https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki/{z}/{x}/{y}.png'
        />
      </LayersControl>
  )
}

export default HazardMapLayer