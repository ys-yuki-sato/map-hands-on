import { useMapEvents} from 'react-leaflet'

// マップ操作のイベントを検知するコンポーネント
function BoundsComponent() {
  const map = useMapEvents({
    moveend: () => {
      // マウス操作等により地図移動した際の、描画されている範囲の南西端と北東端の緯度経度を出力
      // この値をstateで管理して、任意のタイミングでElasticSearchに渡すことで描画範囲内の各種情報を取得可能
      console.log('map.getBounds():', map.getBounds())
    },
  })
  return null
}

export default BoundsComponent