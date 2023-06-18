import dynamic from 'next/dynamic';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  const Map = React.useMemo(
    () =>
      dynamic(() => import('./_components/Map'), {
        ssr: false,
      }),
    []
  );

  return (
    <>
      <div>
        <Link href={'/pin'}>地図にピンを立てる</Link>
      </div>
      <div>
        <Link href={'/manyPin'}>地図に多くのピンを立てる</Link>
      </div>
      <div>
        <Link href={'/tooManyPin'}>地図にもっと多くのピンを立てる</Link>
      </div>
      <div>
        <Link href={'/image'}>地図上に画像を表示する（Leaflet vs MapLibre GL）</Link>
      </div>
    </>
  );
}
