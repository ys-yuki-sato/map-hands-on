# 位置情報エンジニア養成講座 第4章

## コンポーネント設計

bulletproof-react を参考にして feature ベースのディレクトリ構成
※Next.js App Router は \_ から始まる名前のフォルダを、ルーティング制御から除外

```
src/app
...
└── _features
    └── pin/components/ 地図上にピンを立てるテーマで使用する
    ├── manyPin/components/ 地図に多くのピンを立てるテーマで使用する
    ├── tooManyPin/components/ 地図にもっと多くのピンを立てるテーマで使用する
    ├── shapes-leaflet/components/ 地図上に図形を表示する（Leaflet）テーマで使用する
    ├── manyShapes-leaflet/components/ 地図上に多くの図形を表示する（Leaflet）テーマで使用する
    ├── manyShapes-maplibre/components/ 地図上に多くの図形を表示する（MapLibre GL）テーマで使用する
    ├── image/components/LeafletMap.js 地図上に画像を表示する（Leaflet）テーマで使用する
    ├── image/components/MapLibre.js 地図上に画像を表示する（MapLibre GL）テーマで使用する
...
```

## 前提条件
ローカル環境にNode.jsがインストールされていること

Node.jsがインストールされていない方は下記のリンクから
https://nodejs.org/ja


## アプリ起動方法
- npm install
- npm run dev
